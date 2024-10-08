import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductItem, StateDto, UserProduct } from '../../models/user-product';
import { UserProductService } from '../../services/userProduct.service';
import { SharedService } from '../../services/observables/Shared.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-productltem-component',
  templateUrl: './productltem-component.component.html',
  styleUrl: './productltem-component.component.css'
})
export class ProductltemComponentComponent implements OnInit {

  // @Input() balance: number = 0;
  @Input() userProduct?: UserProduct;
  @Input() product?: ProductItem;
  @Output() amountEmitter: EventEmitter<number> = new EventEmitter<number>();
  public openingAmount: number = 0;
  public active: boolean = false;
  public currentAmount: number = 0;
  public minAmount: number = 0;

   constructor(
    private userProductService: UserProductService,
    private sharedService: SharedService,
    private productService: ProductService
  ) {

   }

   ngOnInit(): void {
    this.productService.getById(this.product?.id ?? '').subscribe((resp) => {
      this.openingAmount = resp.minAmount || 0;
      this.minAmount = resp.minAmount || 0;
      // this.openingAmount = this.product?.record[this.product?.record?.length - 1].openingAmount || 0;
    })
    this.active = this.product?.active ?? false;
    this.sharedService.currentValue.subscribe(value => {
      this.currentAmount = value;
    })
   }

   toggleActive(active: boolean, productId: string | undefined) {
    let state: StateDto = {
      isActive: active,
      openingAmount: this.openingAmount
    }
    console.log('state', state)
    if (this.userProduct && productId)
      this.userProductService.updateState(this.userProduct?.userId, productId, state).subscribe((resp) => {
        this.active = active;
        if (active) {
          this.currentAmount = this.currentAmount - this.openingAmount
          this.sharedService.updateAmount(this.currentAmount)
        } else {
          this.currentAmount = this.currentAmount + this.openingAmount
          this.sharedService.updateAmount(this.currentAmount)
        }
    })
   }

}
