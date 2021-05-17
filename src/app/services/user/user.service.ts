import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const backEndUrl = 'http://localhost:9092';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
    console.log('user service loaded');
  }

  registerUser(newUser): any {
    console.log(newUser);
    return this.http
      .post(`${backEndUrl}/auth/users/register`, newUser)
  }



}
