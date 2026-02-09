import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
import { Observable } from 'rxjs';
import { API } from './config/api.config';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) { }

    getUsers(): Observable<any> {
        return this.http.get(API.USER.GET_ALL);
    }

    getUserById(code: string): Observable<any> {
        return this.http.get(API.USER.GET_BY_ID(code));
    }

    createUser(data: any): Observable<any> {
        console.log('Create User Payload:', data);
        return this.http.post(API.USER.CREATE, data);
    }

    updateUser(data: any): Observable<any> {
        console.log('Update User Payload:', data);
        return this.http.put(API.USER.UPDATE, data);
    }

    deleteUser(id: number): Observable<any> {
        return this.http.delete(API.USER.DELETE(id));
    }
}
