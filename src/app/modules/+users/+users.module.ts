import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveUsersComponent } from './active-users/active-users.component';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {routes} from '../+users/users.routes';
import {UsersService} from './users.service';
import { UsersFormComponent } from './users-form/users-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {GMapsService} from './gmaps.service';
import {AgmCoreModule} from "angular2-google-maps/core";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyBTHsJPaZ-MYlCvrhwPwLFtDzOxFJEdaRc'})
  ],
  providers: [
    UsersService,
    GMapsService
  ],
  declarations: [ActiveUsersComponent, UsersFormComponent]
})
export class usersModule { }
