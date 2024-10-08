import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrl: './header-component.component.css'
})
export class HeaderComponentComponent implements OnInit {

  public user?: User;
  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
    this.userService.getById('66fdc292e55a9e1423555a46').subscribe(resp => {
      this.user = resp;
    })
  }
}
