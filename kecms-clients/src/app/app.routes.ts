import { Routes } from '@angular/router';
import { Login } from './module/login/login';
import { Settings } from './module/settings/settings';
import { Users } from './module/users/users';
import { AddUser } from './module/users/add-user/add-user';
import { Roles } from './module/roles/roles';
import { AddRole } from './module/roles/add-role/add-role';
import { AuthGuard } from './shared/auth-guard';


export const routes: Routes = [

  {
    path: 'login',
    component: Login
  },

  // 🔒 PROTECTED ROUTES
  {
    path: '',
    canActivate: [AuthGuard],
    children: [

      {
        path: 'settings',
        component: Settings
      },

      // USERS MODULE
      {
        path: 'User',
        children: [
          { path: '', component: Users },
          { path: 'add-user', component: AddUser },
          { path: 'update/:code', component: AddUser }
        ]
      },

      // ROLES MODULE
      {
        path: 'Role',
        children: [
          { path: '', component: Roles },
          { path: 'add-role', component: AddRole },
          { path: 'update/:code', component: AddRole }
        ]
      }
    ]
  },


  {
    path: '**',
    redirectTo: 'login'
  }
];
