import { Component } from '@angular/core';
import { CommonTable } from '../../shared/common-table/common-table';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-roles',
  imports: [CommonTable, RouterModule],
  templateUrl: './roles.html',
  styleUrl: './roles.css',
})
export class Roles {
  columns = [
    { key: 'srno', label: 'SrNo' },
    { key: 'code', label: 'Code' },
    { key: 'name', label: 'Name' },
    { key: 'isactive', label: 'IsActive' }
  ];
  RoleList = [
    { srno: '1', code: '#ADMIN#', name: 'Admin', isactive: 'true' },
    { srno: '2', code: '#Superadmin', name: 'SuperAdmin', isactive: 'true' },
    { srno: '3', code: '#User', name: 'User', isactive: 'true' },
  ];
}
