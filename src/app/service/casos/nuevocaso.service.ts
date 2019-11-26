import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NuevocasoService {

  API_URI = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getTipoCasos() {
    return this.http.get(`${this.API_URI}/tipocasos`);
  }

  getTipoSolicitud() {
    return this.http.get(`${this.API_URI}/tiposolicitud`);
  }

  getPrioridad() {
    return this.http.get(`${this.API_URI}/prioridad`);
  }

}
