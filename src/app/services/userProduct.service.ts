import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { GenericService } from './Generic.service';
import { StateDto, UserProduct } from '../models/user-product';

@Injectable({
  providedIn: 'root'
})
export class UserProductService extends GenericService<UserProduct, UserProduct> {

  constructor(http: HttpClient) {
    super(http);
  }

  // getById(UserProductId: string): Observable<UserProduct> {
  //   return this.http.get<UserProduct>(`${environment.endpointBase}/UserProduct/${UserProductId}`)
  // }

  getByUserId(userId: string): Observable<UserProduct> {
    return this.http.get<UserProduct>(`${environment.endpointBase}/UserProduct/${userId}`)
  }

  updateState(userId: string, productId: string, stateDto: StateDto): Observable<UserProduct> {
    return this.http.put<UserProduct>(`${environment.endpointBase}/UserProduct/state/${userId}/${productId}`, stateDto)
  }

}
