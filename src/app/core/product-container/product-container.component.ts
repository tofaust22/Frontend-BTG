import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product } from '../../models/product';
import { ProductItem, UserProduct } from '../../models/user-product';
import { UserProductService } from '../../services/userProduct.service';
import { ProductService } from '../../services/product.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrl: './product-container.component.css'
})
export class ProductContainerComponent implements OnChanges, OnInit {

  // public products: Product[] = [];
  @Input() userId?: string;
  public userProducts?: ProductItem[] = [];
  public userProduct?: UserProduct;

  constructor(
    private userProductService: UserProductService,
    private productService: ProductService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['userId'] && changes['userId'].currentValue) {
      this.loadUserProducts();
    }
  }

  ngOnInit(): void {
    if (this.userId) {
      this.loadUserProducts();
    }
  }

  loadUserProducts(): void {
    this.userProductService.getByUserId(this.userId ?? '').subscribe((resp) => {
      this.productService.get().subscribe((products) => {
        this.userProduct = resp;
        let userProductsWithName: ProductItem[] = [];
        resp.products?.forEach((userProduct) => {
          let productWithName: ProductItem = {
            ...userProduct,
            name: products.find((p) => p.id === userProduct.id)?.name
          }
          userProductsWithName = [...userProductsWithName, productWithName];
        });
        this.userProducts = userProductsWithName;
      });
    });
  }


}
