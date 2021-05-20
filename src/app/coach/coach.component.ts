import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../services/user/user.service';
import {HttpClient} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.css']
})
export class CoachComponent implements OnInit {

  public members: any[];
  public member: any;
  public players: any;
  public staff: any;

  constructor(private http: HttpClient, private userService: UserService, private route: ActivatedRoute) { }


  getAllMembers(): void {
    this.userService.getAllMembers().subscribe(response => {
      this.members = response;
      this.route.paramMap
        .subscribe(params => {
          this.member = this.members.find(member => {
            return member.id === parseInt(params.get('id'), 10);
          });
      });
    });
  }

  deleteMember(member): any {
    // @ts-ignore
    const index = this.members.indexOf(member);
    console.log(index);
    this.userService.deleteMember(member).subscribe(() => {
      // @ts-ignore
      this.members.splice(index, 1);
    });
  }

  // filterMembers(role) {
  //   x.d
  // }

  ngOnInit(): void {
    this.getAllMembers();
  }
}

