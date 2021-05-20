import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../services/user/user.service';


@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  constructor(private http: HttpClient, private userService: UserService) {}

  members: any;

  getAllMembers(): any {
    this.userService.getAllMembers().subscribe(response => {
      this.members = response;
    }, err => console.log(err));
  }

  ngOnInit(): void {
     this.getAllMembers();
  }

}
