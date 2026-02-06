import { Routes } from '@angular/router';
import { Login } from './module/login/login';
import { Settings } from './module/settings/settings';
import { Users } from './module/users/users';


export const routes: Routes = [

  {
    path: 'login',
    component: Login
  },
  {
    path: 'settings',
    component: Settings
  }, {
    path: 'User',
    component: Users
  }
];
