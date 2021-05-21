import { Component } from '@angular/core';
import { UserService } from './services/user/user.service';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TheScoreKeeper';
  currentUser: any;

  constructor(private userService: UserService) { }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
    this.userService.searchSubject.subscribe(currentUser => {
      this.currentUser = currentUser;
      console.log(currentUser);
    });

    $(document).ready(function(){
      $('.sidenav').sidenav();
    });

  }


}
