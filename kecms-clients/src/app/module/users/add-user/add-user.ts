import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-user',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './add-user.html',
  styleUrl: './add-user.css',
})
export class AddUser implements OnInit {
  userForm!: FormGroup;

  roles = [
    { id: 1, name: 'Admin' },
    { id: 2, name: 'User' }
  ];

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      id: [0],
      code: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      roleId: ['', Validators.required],
      isActive: [true]
    });
    const code = this.route.snapshot.paramMap.get('code');

    if (code) {
      this.loadUserByCode(code);  
    }
  }



  loadUserByCode(code: string) {
    this.userService.getUserById(code).subscribe({
      next: (user) => {
        this.userForm.patchValue({
          id: user.id,
          code: user.code,
          name: user.name,
          email: user.email,
          roleId: user.roleId,
          isActive: user.isActive
        });
      },
      error: (err) => console.error(err)
    });
  }




  submit() {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }

    const payload = this.userForm.value;

    if (payload.id === 0) {
      // CREATE
      this.userService.createUser(payload).subscribe({
        next: (res) => {
          console.log('User Created:', res);
        },
        error: (err) => {
          console.error('Create Error:', err);
        }
      });
    } else {
      // UPDATE
      this.userService.updateUser(payload).subscribe({
        next: (res) => {
          console.log('User Updated:', res);
        },
        error: (err) => {
          console.error('Update Error:', err);
        }
      });
    }
  }
}


