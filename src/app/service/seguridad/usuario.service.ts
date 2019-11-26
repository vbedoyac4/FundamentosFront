import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  API_URI = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  saveUser(newUser: Usuario) {
    return this.http.post<Response>(`${this.API_URI}/signup`, newUser);
  }

  signin(signinUser: Usuario) {
    return this.http.post<Response>(`${this.API_URI}/signin`, signinUser);
  }

  getUsers() {
    return this.http.get(`${this.API_URI}/users`);
  }

  getUserById(id: string|number) {
    return this.http.get(`${this.API_URI}/user/${id}`);
  }

  getDataUserByUsername(id: string) {
    return this.http.get(`${this.API_URI}/DataUser/${id}`);
  }

  updateUser(updatedUser: Usuario ) {
    return this.http.put<Response>(`${this.API_URI}/update`, updatedUser);
  }

  getRolesByDeptoId(id: string|number) {
    return this.http.get(`${this.API_URI}/getRolesByDepto/${id}`);
  }

  getDepartamentos() {
    return this.http.get(`${this.API_URI}/departamento`);
  }
}
