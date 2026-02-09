import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header implements OnInit {
constructor(private router: Router) {}

  userName = '';

  uploadMenuIds = [4, 7, 9, 25, 26, 27];
  reportMenuIds = [5, 8, 10, 11, 12, 13, 14, 15, 16, 17, 19, 20, 23];

  processedMenus: any[] = [];

  ngOnInit(): void {

    // username
    const user = localStorage.getItem('user');
    if (user) {
      this.userName = JSON.parse(user).Name;
    }

    // menus
    const menuData = localStorage.getItem('menus');
    if (!menuData) return;

    const menus = JSON.parse(menuData);

    const uploadItems = menus.filter((m: any) =>
      this.uploadMenuIds.includes(m.id)
    );

    const reportItems = menus.filter((m: any) =>
      this.reportMenuIds.includes(m.id)
    );

    let uploadAdded = false;
    let reportAdded = false;

    menus.forEach((m: any) => {

      if (this.uploadMenuIds.includes(m.id)) {
        if (!uploadAdded) {
          this.processedMenus.push({
            type: 'upload',
            items: uploadItems
          });
          uploadAdded = true;
        }
        return;
      }

      if (this.reportMenuIds.includes(m.id)) {
        if (!reportAdded) {
          this.processedMenus.push({
            type: 'report',
            items: reportItems
          });
          reportAdded = true;
        }
        return;
      }

      // normal menu
      this.processedMenus.push({
        type: 'normal',
        item: m
      });
    });
  }

  logout() {
  localStorage.clear();
  this.router.navigate(['/login']);
}
}
