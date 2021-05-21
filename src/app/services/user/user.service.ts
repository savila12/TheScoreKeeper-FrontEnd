import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

const backEndUrl = 'http://localhost:9092';
const herokuUrl = 'https://infinite-atoll-93618.herokuapp.com/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser: string;
  searchSubject = new Subject();
  member: any;

  constructor(private http: HttpClient, private router: Router) {}

  // @ts-ignore
  registerUser(newUser): any {
    console.log(newUser);
    return this.http
      .post(`${herokuUrl}/auth/users/register`, newUser);
  }

  registerTeam(newTeam): any{
    console.log(newTeam);
    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      }),
    };
    return this.http
      .post(`${herokuUrl}/api/teams`, newTeam, requestOptions);
  }


  loginUser(user): void {
    console.log(user);
    this.http
      .post(`${herokuUrl}/auth/users/login`, user)
      .subscribe(response => {
        const token = response['jwt'];
        localStorage.setItem('currentUser', `${user.email}`);
        localStorage.setItem('token', `${token}`);
        console.log(response, token);
        this.currentUser = user.email;
        this.searchSubject.next(this.currentUser);
        this.router.navigate(['/coach']);
      }, err => console.log(err));
  }

  logoutUser(): void {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    this.currentUser = null;
    this.searchSubject.next(this.currentUser);
    this.router.navigate(['/login']);
  }

  createMember(newMember): any {
    console.log(newMember);
    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      }),
    };
    return this.http
      .post(`${herokuUrl}/api/teams/members`, newMember, requestOptions);
  }

  getAllMembers(): any {
    console.log('in "getAllMembers()" user service');

    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      }),
    };
    return this.http
      .get(`${herokuUrl}/api/teams/members/`, requestOptions);
  }


  deleteMember(id: any): any {
    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      }),
    };
    return this.http
      .delete(`${herokuUrl}/api/teams/members/${id}`, requestOptions);
  }
}
