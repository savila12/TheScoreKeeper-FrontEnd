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

  registerUser(): void {
    const newUser = {userName: this.userName, emailAddress: this.emailAddress,
                     password: this.password, firstName: this.firstName, lastName: this.lastName};
    this.userService.registerUser(newUser)
      .subscribe(response => console.log(response),err => console.log(err));
  }


  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

}
