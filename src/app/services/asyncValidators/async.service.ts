import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AbstractControl, ValidatorFn} from '@angular/forms';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

const herokuUrl = 'https://infinite-atoll-93618.herokuapp.com';

@Injectable({
  providedIn: 'root',
})
export class AsyncService {
  constructor(private http: HttpClient) {}

  userNameValidator(): ValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any} | null> => {
      const isUnique$ = this.http.get(`${herokuUrl}/auth/users`, {
        params: {userName: control.value},
      });
      return isUnique$.pipe(
        map((isUnique) => (isUnique ? {unique: true} : null))
      );

    };
  }
}
