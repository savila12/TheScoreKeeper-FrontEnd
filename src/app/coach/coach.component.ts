import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../services/user/user.service';

@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.css']
})
export class CoachComponent implements OnInit {

  public members: any;
  public players: any;
  public staff: any;

  constructor(private http: HttpClient, private userService: UserService) {
  }

  getAllMembers(): void {
    this.userService.getAllMembers().subscribe(response => {
      this.members = response;
      this.players = this.members.filter(player => this.members.role === 'player');
      this.staff = this.members.filter(staff => this.members.role === 'staff');
    });
  }

  showPlayer(): void{
    console.log('coach.component');
    console.log('player');
  }

  showStaff(): void{
    console.log('coach.component');
    console.log('staff');
  }



  ngOnInit(): void {
    this.getAllMembers();
  }
}
