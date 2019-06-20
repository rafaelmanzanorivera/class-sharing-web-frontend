import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../shared/services/auth-service.service';
import {User} from '../../_models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  logo = 'assets/mortarboard.svg';

  currentUser: User;

  constructor(private authenticationService: AuthenticationService) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {
    console.log(this.currentUser);
  }

  logout()
  {
    this.authenticationService.logout();
  }

}
