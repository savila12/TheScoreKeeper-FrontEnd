import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const backEndUrl = 'http://localhost:9092';
const herokuUrl = 'https://infinite-atoll-93618.herokuapp.com/';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(private http: HttpClient) { }

  getTeams(): any {
    return this.http
      .get(`${herokuUrl}/api/teams`);
  }


} // END OF CLASS


