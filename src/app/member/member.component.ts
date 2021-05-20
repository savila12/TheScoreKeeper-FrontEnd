import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../services/user/user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  @Input()
  members: any;
  member: any;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }

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
    }, err => console.log(err));
  }

  ngOnInit(): void {
    this.getAllMembers();
  }

}
