import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email!: string;
  password!: string;

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}

  login() {
    console.log(this.email, this.password);
    this.loginService.login(this.email, this.password);
  }
}
