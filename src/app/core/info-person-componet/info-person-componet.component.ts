import { Component, Input } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { SharedService } from '../../services/observables/Shared.service';
import { Record } from '../../models/user-product';
import { UserProductService } from '../../services/userProduct.service';

@Component({
  selector: 'app-info-person-componet',
  templateUrl: './info-person-componet.component.html',
  styleUrl: './info-person-componet.component.css'
})
export class InfoPersonComponetComponent {

  public currentAmount: number = 0;
  isModalOpen: boolean = false; // Controlar si el modal está abierto
  records: Record[] = []
  public user?: User;
  constructor(
    private userProductService: UserProductService,
    private sharedService: SharedService
  ) {
    // this.user =
  }
  ngOnInit(): void {
    this.userProductService.getByUserId('66fdc292e55a9e1423555a46').subscribe((resp) => {
      let records
      resp.products.forEach((product) => {
        this.records = [...this.records, ...(product?.record || [])]
      })
    })
    // this.record = this.user.
    // this.userService.getById('66fdc292e55a9e1423555a46').subscribe(resp => {
      this.sharedService.currentValue.subscribe(value => {
        this.currentAmount = value;
      })
      // this.user = resp;
    // })
  }

  openModal() {
    this.isModalOpen = true; // Abrir el modal
  }
}
