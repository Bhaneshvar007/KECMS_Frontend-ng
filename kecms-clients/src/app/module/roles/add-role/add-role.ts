import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
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
    private roleService: RoleService
  ) { }


  ngOnInit(): void {
    this.roleForm = this.fb.group({
      id: [0],
      code: ['', Validators.required],
      name: ['', Validators.required],
      isActive: [true]
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
