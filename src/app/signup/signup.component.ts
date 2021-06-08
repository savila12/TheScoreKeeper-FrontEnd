import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import {FormBuilder, FormGroup, Validators, FormsModule, NgForm, AbstractControl, AsyncValidatorFn, ValidationErrors} from '@angular/forms';
import {ValidateUserName} from '../asyn-userName.validator';
import {ValidateEmail} from '../asyn-email.validator';
import {Observable, of} from 'rxjs';
import {delay, map, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form: FormGroup;
  static userService: UserService;

  static userNameExists(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return of(control.value).pipe(
        delay(500),
        switchMap((userName) => this.userService.checkUserNameNotTaken(userName).pipe(
          map(userNameExists => userNameExists ? {userNameExists: true} : null)
        ))
      );
    };
  }
  constructor(private userService: UserService, private formBuilder: FormBuilder) {}

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
      ],
      emailAddress: [
        '',
        [Validators.required,
          Validators.email],
        ValidateEmail.createValidator(this.userService)],
      password: ['', Validators.required]
    });
  }
}
