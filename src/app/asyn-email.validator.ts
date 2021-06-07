import { AbstractControl } from '@angular/forms';
import { UserService } from './services/user/user.service';

export class ValidateEmail {
  // tslint:disable-next-line:typedef
  static createValidator(userService: UserService) {
    return (control: AbstractControl) => {
      return userService.member.emailAddress.map(response => {
        return response ? null : { emailTaken: true};
      });
    };
  }
}
