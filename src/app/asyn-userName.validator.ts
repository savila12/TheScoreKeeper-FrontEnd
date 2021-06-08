import {AbstractControl, AsyncValidatorFn, ValidationErrors} from '@angular/forms';
import { UserService } from './services/user/user.service';
import {Observable, of} from 'rxjs';
import {delay, map, switchMap} from 'rxjs/operators';

export class ValidateUserName {
  // tslint:disable-next-line:typedef
  private static userService: UserService;

  static createValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return of(control.value).pipe(
        delay(500),
        switchMap((email) => this.userService.checkUserNameNotTaken(email).pipe(
          map(emailExists => emailExists ? {emailExists: true} : null)
        ))
      );
    };
  }
}
