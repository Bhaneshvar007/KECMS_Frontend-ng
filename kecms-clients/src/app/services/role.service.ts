import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
import { Observable } from 'rxjs';
import { API } from './config/api.config';

@Injectable({
    providedIn: 'root'
})
export class RoleService {

    constructor(private http: HttpClient) { }

    getRoles(): Observable<any> {
        return this.http.get(API.ROLE.GET_ALL);
    }

    getRoleById(id: number): Observable<any> {
        return this.http.get(API.ROLE.GET_BY_ID(id));
    }

    createRole(data: any): Observable<any> {
        console.log('Create Role Payload:', data);
        return this.http.post(API.ROLE.CREATE, data);
    }

    updateRole(data: any): Observable<any> {
        console.log('Update Role Payload:', data);
        return this.http.put(API.ROLE.UPDATE, data);
    }
 
}
