import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../services/teams/teams.service';
declare const M;

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  public teams: [];

  constructor(private teamsService: TeamsService) { }

  getTeams(): any {
    this.teamsService.getTeams().subscribe(response => {
      this.teams = response;
    }, err => console.log(err));
  }


  ngOnInit(): void {
    this.getTeams();
  }


}
