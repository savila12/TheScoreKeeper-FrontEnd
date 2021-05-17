import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

const backEndUrl = 'http://localhost:9092';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser: string;
  searchSubject = new Subject();

  constructor(private http: HttpClient, private router: Router) {
    console.log('user service loaded');
  }

  registerUser(newUser): any {
    console.log(newUser);
    return this.http
      .post(`${backEndUrl}/auth/users/register`, newUser)
  }

  loginUser(user): void {
    console.log(user);
    this.http
      .post(`${backEndUrl}/auth/users/login`, user)
      .subscribe(response => {
        const token = response['jwt'];
        localStorage.setItem('currentUser', `${user.email}`);
        localStorage.setItem('token', `${token}`);
        console.log(response, token);
      }, err => console.log(err));
  }

  logoutUser(): void {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    this.currentUser = '';
    this.router.navigate(['/login']);
  }



}
