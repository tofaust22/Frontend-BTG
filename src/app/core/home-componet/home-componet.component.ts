import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { SharedService } from '../../services/observables/Shared.service';

@Component({
  selector: 'app-home-componet',
  templateUrl: './home-componet.component.html',
  styleUrl: './home-componet.component.css'
})
export class HomeComponetComponent implements OnInit {

  public user?: User;

  constructor(
    private userService: UserService,
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.userService.getById('66fdc292e55a9e1423555a46').subscribe(resp => {
      this.user = resp;
      this.sharedService.updateAmount(resp.financeData.amount)
    })
  }



}
