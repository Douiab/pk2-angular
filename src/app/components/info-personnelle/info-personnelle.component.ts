import { Component, OnInit } from '@angular/core';
import { User } from 'app/collection/user';
import { LoginService } from '../login/login.service';


@Component({
  selector: 'app-info-personnelle',
  templateUrl: './info-personnelle.component.html',
  styleUrls: ['./info-personnelle.component.css']
})
export class InfoPersonnelleComponent implements OnInit {
  user: User;
  user2: any;

  constructor(private loginService: LoginService) {
  }

  ngOnInit() {
    this.user = this.loginService.getUser();
  }
}
