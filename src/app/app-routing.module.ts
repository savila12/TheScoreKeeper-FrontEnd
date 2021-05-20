import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TeamsComponent } from './teams/teams.component';
import { SignupComponent } from './signup/signup.component';
import { LogoutComponent } from './logout/logout.component';
import { CoachComponent } from './coach/coach.component';
import { CreateMemberComponent } from './create-member/create-member.component';
import { TeamCreationComponent } from './team-creation/team-creation.component';
import {MemberComponent} from './member/member.component';
import {CarouselComponent} from './carousel/carousel.component';

const routes: Routes = [
  {
    path: '',
    component: CarouselComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'teams',
    component: TeamsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'coach',
    component: CoachComponent,
    children: [
      {
        path: ':id',
        component: MemberComponent
      }
    ]
  },
  {
    path: 'createMember',
    component: CreateMemberComponent
  },
  {
    path: 'createTeam',
    component: TeamCreationComponent
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
