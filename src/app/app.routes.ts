import {Routes} from '@angular/router';


export const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'users',
    loadChildren: './modules/+users/+users.module#usersModule',
    data: {
      preload: true
    }
  }
];
