import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
declare var $: any;

@Component({
  selector: 'app-create-member',
  templateUrl: './create-member.component.html',
  styleUrls: ['./create-member.component.css']
})
export class CreateMemberComponent implements OnInit {

  public members: any [] = [];
  public firstName: any;
  public lastName: string;
  public emailAddress: string;
  public address: string;
  public role: string;
  public options: any;
  public position: string;
  public playerNumber: number;
  public battingOrder: number;
  public phoneNumber: string;

  constructor(private userService: UserService) { }

  createMember(): void {
    console.log(this.members, "I am working");
    const newMember = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.emailAddress,
      address: this.address,
      phoneNumber: this.phoneNumber,
      role: this.role,
      battingOrder: this.battingOrder,
      position: this.position,
      playerNumber: this.playerNumber};

    this.userService.createMember(newMember).subscribe(response => {
      this.members = [...this.members, response];
      console.log(this.members, response);
    }, err => console.log(err));
  }

  // tslint:disable-next-line:typedef
  selectRoleType(event: any) {
    this.role = event.target.value;
  }

  ngOnInit(): void {
    $(document).ready(function(){
      $('select').formSelect();
    });
  }



}
