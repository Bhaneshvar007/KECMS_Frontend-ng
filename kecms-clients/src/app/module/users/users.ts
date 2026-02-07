import { Component } from '@angular/core';
import { CommonTable } from '../../shared/common-table/common-table';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [CommonTable, RouterModule],
  templateUrl: './users.html',
  styleUrl: './users.css',
})


export class Users {
  columns = [
    { key: 'srno', label: 'SrNo' },
    { key: 'code', label: 'Code' },
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Role' }
  ];
  userList = [
    { srno: '1', code: '3710', name: 'Smita', email: 'smita@test.com', role: 'Admin' },
    { srno: '2', code: '3711', name: 'Anshuk', email: 'anshuk@test.com', role: 'User' },
    { srno: '3', code: '1281', name: 'Bhaneshvark', email: 'Bhaneshvar@test.com', role: 'Analyst' },
    { srno: '4', code: '3712', name: 'Anisha', email: 'anisha@test.com', role: 'SuperAdmin' }
  ];
}
