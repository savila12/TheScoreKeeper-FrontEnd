import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../services/user/user.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.css']
})
export class CoachComponent implements OnInit {

  public members: any;
  public member: any;
  public players: any;
  public staff: any;

  constructor(private http: HttpClient, private userService: UserService, private route: ActivatedRoute) {
  }

  // getAllMembers(): void {
  //   this.userService.getAllMembers().subscribe(response => {
  //     this.members = response;
  //   });
  // }

  showAll(): void{
    this.userService.getAllMembers().subscribe(response => {
      this.members = response;
    });
  }

  // getAllMembers(): void {
  //   this.userService.getAllMembers().subscribe(response => {
  //     this.members = response;
  //     this.route.paramMap
  //       .subscribe(params => {
  //         this.member = this.members.find(member => {
  //           return member.id === parseInt(params.get('id'), 10);
  //         });
  //     });
  //   });
  // }

  showPlayer(): void{
    this.userService.getAllMembers().subscribe(response => {
      this.members = response;
      this.members = this.members.filter(player => player.role === 'player');
      console.log(this.players);
    });
  }

  showStaff(): void{
    this.userService.getAllMembers().subscribe(response => {
      this.members = response;
      this.members = this.members.filter(player => player.role === 'staff');
      console.log(this.staff);
    });
  }



  ngOnInit(): void {
    this.showAll();
  }
}

