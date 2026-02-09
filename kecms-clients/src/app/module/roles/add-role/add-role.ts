import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { RoleService } from '../../../services/role.service';

@Component({
  selector: 'app-add-role',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './add-role.html',
  styleUrl: './add-role.css',
})
export class AddRole {
  roleForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private roleService: RoleService,
    private route: ActivatedRoute
  ) { }


  ngOnInit(): void {
    this.roleForm = this.fb.group({
      id: [0],
      code: ['', Validators.required],
      name: ['', Validators.required],
      isActive: [true]
    });

    const code = this.route.snapshot.paramMap.get('code');

    if (code) {
      this.loadRoleByCode(code); 
      console.log(code) 
    }
  }




  loadRoleByCode(code: string) {
    this.roleService.getRoleById(code).subscribe({
      next: (role) => {
        this.roleForm.patchValue({
          id: role.id,
          code: role.code,
          name: role.name,
          isActive: role.isActive
        });
      },
      error: (err) => console.error(err)
    });
  }



  submit() {
    if (this.roleForm.invalid) {
      this.roleForm.markAllAsTouched();
      return;
    }

    const payload = this.roleForm.value;
     
    if (payload.id === 0) {
      // CREATE
      this.roleService.createRole(payload).subscribe({
        next: (res) => {
          console.log('Role Created:', res);
        },
        error: (err) => {
          console.error('Create Error:', err);
        }
      });
    } else {
      // UPDATE
      this.roleService.updateRole(payload).subscribe({
        next: (res) => {
          console.log('Role Updated:', res);
        },
        error: (err) => {
          console.error('Update Error:', err);
        }
      });
    }
  }
}
