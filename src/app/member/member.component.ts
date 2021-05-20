import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user/user.service';
import {ActivatedRoute, Params, Router} from '@angular/router';


@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  members: any;
  member: any;
  indexOfMember: any;


  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router) {}


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

  deleteMemberById(): any {
    this.indexOfMember = this.route.snapshot.paramMap.get('id');
    // const arrayIndexOfMember = (element) => element.id === parseInt(this.indexOfMember, 10);
    //
    //
    // // @ts-ignore
    // if (this.members.findIndex(arrayIndexOfMember) > -1) {
    //   this.members.splice(this.members.findIndex(arrayIndexOfMember), 1);
    //   console.log('in if statement.');
    // }
    //
    // console.log(this.members.findIndex(arrayIndexOfMember));
    console.log(this.indexOfMember);
    // console.log(this.members);

    this.userService.deleteMember(this.indexOfMember).subscribe( () => {
      this.members.splice(this.indexOfMember, 1);
    }, err => console.log(err));
    // this.router.navigate(['/coach']);
    // this.reloadComponent();
    this.getAllMembers();
  }

  reloadComponent(): any {
    const currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/coach']);
  }


  ngOnChange(): void{
    this.getAllMembers();
  }
  ngOnInit(): void {
    this.getAllMembers();
  }

}
