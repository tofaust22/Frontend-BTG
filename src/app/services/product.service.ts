import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { GenericService } from './Generic.service';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends GenericService<Product, Product> {

  constructor(http: HttpClient) {
    super(http);
  }

  get(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.endpointBase}/product`)
  }

  getById(productId: string): Observable<Product> {
    return this.http.get<Product>(`${environment.endpointBase}/product/${productId}`)
  }
}
