import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Proyecto } from '../../models/proyecto';

@Injectable({
  providedIn: 'root'
})
export class CrearproyectoService {

  API_URI  = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getProyectos() {
    return this.http.get(`${this.API_URI}/proyecto`);
  }

  getProyecto(id: string) {
    return this.http.get(`${this.API_URI}/proyecto/${id}`);
  }

  saveProyecto(proyecto: Proyecto) {
    return this.http.post(`${this.API_URI}/addproyecto/`,proyecto);

  }

  updateProyecto(id, updateProyecto) {
    return this.http.put(`${this.API_URI}/edit_proyecto/${id}`, updateProyecto);
  }
}
