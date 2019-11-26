import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Roles } from '../../models/roles';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  API_URI = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  saveRol(newRol: Roles) {
    return this.http.post<Response>(`${this.API_URI}/add_rol`, newRol);
  }

  getRoles() {
    return this.http.get(`${this.API_URI}/roles`);
  }

  getRolById(id: string|number) {
    return this.http.get(`${this.API_URI}/rol/${id}`);
  }

  updateRol(id: string|number, updatedRol: Roles ) {
    return this.http.put<Response>(`${this.API_URI}/edit_rol/${id}`, updatedRol);
  }

  getDepartamentos() {
    return this.http.get(`${this.API_URI}/departamento`);
  }
}
