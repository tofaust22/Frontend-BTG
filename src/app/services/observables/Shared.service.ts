import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private valueAmount = new BehaviorSubject<number>(0);
  currentValue = this.valueAmount.asObservable();

  updateAmount(value: number) {
    this.valueAmount.next(value);
  }
}
