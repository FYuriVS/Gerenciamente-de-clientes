import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private router: Router, private http: HttpClient) {}

  login(user: string, pass: string) {
    // this.http.post('192.168.40.126/auth/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'appliication/json',
    //   },
    //   body: JSON.stringify({
    //     email: user,
    //     password: pass,
    //   }),
    // });

    this.router.navigate(['clients']);
  }
}
