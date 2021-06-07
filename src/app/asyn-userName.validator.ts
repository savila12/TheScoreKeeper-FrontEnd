import { AbstractControl } from '@angular/forms';
import { UserService } from './services/user/user.service';

export class ValidateUserName {
  // tslint:disable-next-line:typedef
  static createValidator(userService: UserService){
    return (control: AbstractControl) => {
      return userService.member.userName.map(response => {
        return response ? null : { userNameTaken: true};
      });
    };
  }
}
