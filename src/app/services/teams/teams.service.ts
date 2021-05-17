import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const backEndUrl = 'http://localhost:9092';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(private http: HttpClient) { }

  getTeams(): any {
    return this.http
      .get(`${backEndUrl}/api/teams`);
  }
} // END OF CLASS


