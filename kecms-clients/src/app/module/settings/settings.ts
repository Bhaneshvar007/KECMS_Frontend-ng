import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface MenuItem {
  title: string;
  icon: string;
  link: string;
}
@Component({
  selector: 'app-settings',
  imports: [CommonModule, RouterModule],
  templateUrl: './settings.html',
  styleUrl: './settings.css',
})
export class Settings {
menuItems: MenuItem[] = [
    { title: 'User Master', icon: 'fa fa-user fa-4x', link: '/User' },
    { title: 'Role Master', icon: 'fa fa-bars fa-4x', link: '/Role' },
    { title: 'Menu Role Mapping', icon: 'fa fa-tasks fa-4x', link: '/MenuRoleMap' },
     
  ];
}
