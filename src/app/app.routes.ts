<<<<<<< HEAD
import {Routes} from "@angular/router";
import {MainComponent} from "./components/main/main.component";
import {FormComponent} from "./components/form/form.component";
=======
import {Routes} from '@angular/router';

>>>>>>> e6f5115e4360fed2f38f30e4258940e9e74d9710

export const routes: Routes = [
  {
    path: '',
<<<<<<< HEAD
    component: MainComponent
  },
  {
    path: 'user',
    component: FormComponent
  }
]

=======
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
>>>>>>> e6f5115e4360fed2f38f30e4258940e9e74d9710
