import { Injectable } from '@angular/core';
import {  Empresa } from '../../models/empresas';
import {  HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  API_URI  = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getEmpresas() {
    return this.http.get<Empresa[]>(`${this.API_URI}/empresa`);
  }

  getEmpresa(id: string) {
    return this.http.get(`${this.API_URI}/empresa/${id}`);
  }

  saveEmpresa(empresa: Empresa) {
    return this.http.post(`${this.API_URI}/addempresa/`, empresa);

  }

  updateEmpresa(id, updateEmpresa) {
    return this.http.put(`${this.API_URI}/edit_empresa/${id}`, updateEmpresa);
  }
}
