import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Carpetas } from '../../models/carpetas';

@Injectable({
  providedIn: 'root'
})
export class CarpetasService {

  API_URI = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  saveFolder(newFolder: Carpetas) {
    return this.http.post<Response>(`${this.API_URI}/carpeta/AddCarpeta`, newFolder);
  }

  getFolders() {
    return this.http.get(`${this.API_URI}/carpetas`);
  }

  getFoldersEstrategicos() {
    return this.http.get(`${this.API_URI}/carpetas/estrategicas`);
  }

  getFoldersOperativos() {
    return this.http.get(`${this.API_URI}/carpetas/operativas`);
  }

  getFoldersSoporte() {
    return this.http.get(`${this.API_URI}/carpetas/soporte`);
  }

  getFolderById(id: string|number) {
    return this.http.get(`${this.API_URI}/carpetas/${id}`);
  }
}
