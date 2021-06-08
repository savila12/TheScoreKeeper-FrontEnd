import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import {Observable, Subject} from 'rxjs';
import {response} from 'express';

const backEndUrl = 'http://localhost:9092';
const herokuUrl = 'https://infinite-atoll-93618.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router) {}

  currentUser: string;
  searchSubject = new Subject();
  member: any;

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

  // tslint:disable-next-line:typedef
  checkUserNameNotTaken(username: string){
    const url = `${herokuUrl}/auth/users`;
    const user: any = {};
    user.username = username;
    const response$: Observable<boolean> = this.http.post<boolean>(url, user);
    return response$;
  }
}
