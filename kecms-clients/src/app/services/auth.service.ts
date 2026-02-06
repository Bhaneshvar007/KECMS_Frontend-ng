import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from './config/api.config';
  
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}
  
  login(data: { email: string; password: string }) {
    console.log('Login payload received:', data);
     return this.http.post(API.AUTH.LOGIN, data);
  }
}
