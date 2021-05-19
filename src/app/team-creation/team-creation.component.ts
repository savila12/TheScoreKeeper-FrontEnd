import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-team-creation',
  templateUrl: './team-creation.component.html',
  styleUrls: ['./team-creation.component.css']
})
export class TeamCreationComponent implements OnInit {

  public teamName: string;
  public cityName: string;
  public parkName: string;

  registerTeam(): void{
    const newTeam = {
      teamName: this.teamName,
      parkName: this.parkName,
      city: this.cityName
    };
    this.userService.registerTeam(newTeam)
      .subscribe(response => console.log(response), err => console.log(err));
  }

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

}
