import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { GenericService } from './Generic.service';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService extends GenericService<User, User> {

  constructor(http: HttpClient) {
    super(http);
  }

  getById(userId: string): Observable<User> {
    return this.http.get<User>(`${environment.endpointBase}/user/${userId}`)
  }

}
