import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Menu {
  id: number;
  title: string;
  route: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header {

  userName = 'Smita Joshi';

  menus: Menu[] = [
    { id: 1, title: 'Scheme Master', route: '/scheme-master' },
    { id: 2, title: 'Employee Master', route: '/employee-master' },
    { id: 3, title: 'Emp Schm Mapping', route: '/emp-schm-mapping' },

    // Upload
    { id: 101, title: 'Retention Upload', route: '/upload/retention' },
    { id: 102, title: 'SetOff Upload', route: '/upload/setoff' },
    { id: 103, title: 'AUM Upload', route: '/upload/aum' },
    { id: 104, title: 'Upload Scheme', route: '/upload/scheme' },
    { id: 105, title: 'Upload Employee', route: '/upload/employee' },
    { id: 106, title: 'Upload Empsch Mapping', route: '/upload/empsch' },

    // Reports
    { id: 201, title: 'Apportionment Report', route: '/reports/apportionment' },
    { id: 202, title: 'Retention Calculate Amount Report', route: '/reports/retention' },
    { id: 203, title: 'SetOff Calculate Amount Report', route: '/reports/setoff' },
    { id: 204, title: 'Karvy Report Without SetOff', route: '/reports/karvy-no-setoff' },
    { id: 205, title: 'Karvy Report With SetOff', route: '/reports/karvy-setoff' },
    { id: 206, title: 'Sent to Website Report', route: '/reports/website' },
    { id: 207, title: 'Sent to Payroll Report', route: '/reports/payroll' },
    { id: 208, title: 'Sent To Account Report', route: '/reports/account' }
  ]; 

  uploadIds = [101, 102, 103, 104, 105, 106];
  reportIds = [201, 202, 203, 204, 205, 206, 207, 208];
}
