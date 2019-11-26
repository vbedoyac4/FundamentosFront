import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleados } from '../../models/empleados';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  API_URI  = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getEmpleados() {
    return this.http.get<Empleados[]>(`${this.API_URI}/empleado`);
  }

  getEmpleado(id: string) {
    return this.http.get(`${this.API_URI}/empleado/${id}`);
  }

  saveEmpleado(empleado: Empleados) {
    return this.http.post(`${this.API_URI}/addempleado/`,empleado);

  }

  updateEmpleado(id, updateEmpleado) {
    return this.http.put(`${this.API_URI}/edit_empleado/${id}`, updateEmpleado);
  }
}
