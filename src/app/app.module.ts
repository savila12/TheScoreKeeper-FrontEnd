import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { TeamsComponent } from './teams/teams.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { CoachComponent } from './coach/coach.component';
import { CreateMemberComponent } from './create-member/create-member.component';
import { TeamCreationComponent } from './team-creation/team-creation.component';
import { MembersComponent } from './members/members.component';
import { MemberComponent } from './member/member.component';
import { ButtonComponent } from './button/button.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    TeamsComponent,
    LoginComponent,
    HomeComponent,
    LogoutComponent,
    CoachComponent,
    CreateMemberComponent,
    TeamCreationComponent,
    MembersComponent,
    MemberComponent,
    ButtonComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
