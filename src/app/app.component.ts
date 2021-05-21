import { Component } from '@angular/core';
import { UserService } from './services/user/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() { }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {}

}
