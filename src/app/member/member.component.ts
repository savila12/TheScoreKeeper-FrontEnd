import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user/user.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  members: any;
  member: any;

  constructor(private userService: UserService,
              private route: ActivatedRoute) {}

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


ngOnInit(): void {
    this.getAllMembers();
  }

}
