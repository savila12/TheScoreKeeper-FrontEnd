import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public userName: string;
  public firstName: string;
  public lastName: string;
  public emailAddress: string;
  public password: string;
  public teamName: string;
  public cityName: string;
  public parkName: string;

  registerUser(): void {
    const newUser = {
      userName: this.userName,
      emailAddress: this.emailAddress,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName};
    this.userService.registerUser(newUser)
      .subscribe(response => console.log(response), err => console.log(err));
  }

  registerTeam(): void{
    const newTeam = {
      teamName: this.teamName,
      parkName: this.parkName,
      city: this.cityName
    };
    this.userService.registerTeam(newTeam)
      .subscribe(response => console.log(response), err => console.log(err));
  }

  registerUserAndTeam(): void {
    this.registerUser();
    this.registerTeam();
  }


  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

}
