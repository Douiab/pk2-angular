import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { User } from 'app/collection/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  num_compte : String;
  password : String;
  constructor(private LoginService: LoginService) { }

  ngOnInit() {
  }
  //function login
  login() {
    let query = {
      num_compte : this.num_compte,
      password : this.password
    }
    this.LoginService.login(query);
  }
}
