import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { IGenericService } from './interface/IGeneric.service';

@Injectable({
  providedIn: 'root'
})
export class GenericService<Entity, EntityRequest> implements IGenericService<Entity, EntityRequest> {

  constructor(
    protected http: HttpClient,
    // @Inject('ENDPOINT_NAME') protected endpointName: string
  ) { }
}
