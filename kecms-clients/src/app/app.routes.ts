import { Routes } from '@angular/router';
import { Login } from './module/login/login';
import { Settings } from './module/settings/settings';
import { Users } from './module/users/users';
import { AddUser } from './module/users/add-user/add-user';
import { Roles } from './module/roles/roles';
import { AddRole } from './module/roles/add-role/add-role';


export const routes: Routes = [

  {
    path: 'login',
    component: Login
  },
  {
    path: 'settings',
    component: Settings
  },
  {
    path: 'User',
    component: Users
  },
  {
    path: 'User',
    children: [
      { path: '', component: Users },
      { path: 'add-user', component: AddUser }
    ]
  },
  {
    path: 'Role',
    component: Roles
  },
  {
    path: 'Role',
    children: [
      { path: '', component: Roles },
      { path: 'add-role', component: AddRole }
    ]
  },
];
