import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import {FormBuilder, FormGroup, Validators, FormsModule, NgForm, AbstractControl} from '@angular/forms';
import {ValidateUserName} from '../asyn-userName.validator';
import {ValidateEmail} from '../asyn-email.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  // public userName: string;
  // public firstName: string;
  // public lastName: string;
  // public emailAddress: string;
  // public password: string;
   form: FormGroup;

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

  constructor(private userService: UserService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15), Validators.pattern('[A-Za-z]*')]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15), Validators.pattern('[A-Za-z]*')]],
      userName: [
        '',
        [Validators.required, Validators.minLength(6), Validators.maxLength(64)],
        ValidateUserName.createValidator(this.userService)],
      emailAddress: [
        '',
        [Validators.required,
        Validators.email],
        ValidateEmail.createValidator(this.userService)],
      password: ['', Validators.required]
    });
  }

  // tslint:disable-next-line:typedef
  // get firstName(){
  //   return this.form.get('firstName');
  // }

  ngOnInit(): void {}

}
