import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import {AsyncService} from '../services/asyncValidators/async.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form: FormGroup;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private asyncService: AsyncService) {}

  // registerUser(form: NgForm): void {
  //   const newUser = {
  //     userName: this.userName,
  //     emailAddress: this.emailAddress,
  //     password: this.password,
  //     firstName: this.firstName,
  //     lastName: this.lastName};
  //   this.userService.registerUser(newUser)
  //     .subscribe(response => console.log(response), err => console.log(err));
  // }

  // public userName: string;
  // public firstName: string;
  // public lastName: string;
  // public emailAddress: string;
  // public password: string;

  ngOnInit(): void {
    this.createForm();
  }

  // tslint:disable-next-line:typedef
  createForm() {
    this.form = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15), Validators.pattern('[A-Za-z]*')]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15), Validators.pattern('[A-Za-z]*')]],
      userName: [
        '',
        [Validators.required, Validators.minLength(6), Validators.maxLength(64)],
        this.asyncService.userNameValidator()],
      emailAddress: [
        '',
        [Validators.required,
          Validators.email],
        ],
      password: ['', Validators.required]
    });
  }
}
