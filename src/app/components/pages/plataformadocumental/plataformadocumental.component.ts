import { Component, OnInit } from '@angular/core';
import { Carpetas } from '../../../models/carpetas';
import { CarpetasService } from '../../../service/plataformadoc/carpetas.service';

@Component({
  selector: 'app-plataformadocumental',
  templateUrl: './plataformadocumental.component.html',
  styleUrls: ['./plataformadocumental.component.css']
})
export class PlataformadocumentalComponent implements OnInit {
  public carpeta: Carpetas;
  datos;
  opcionSeleccionado: string = '0'; // Iniciamos
  verSeleccion: string;
  public folders: any = [];
  public foldersEstrategicos: any = [];
  public foldersOperativos: any = [];
  public foldersSoporte: any = [];
  public folder: any = [];
  public sucesorEstrategico: number;
  public sucesorOperativo: number;
  public sucesorSoporte: number;

  constructor(private carpetaService: CarpetasService) {
    this.datos = [{id: 1, message: 'opcion 1'}, {id: 2, message: 'opcion 2'}, {id: 3, message: 'opcion 3'}];
    this.limparCampos();
  }

  ngOnInit() {
    this.getFolders();
    this.getFoldersEstrategicos();
    this.getFoldersOperativos();
    this.getFoldersSoporte();
    this.sucesorEstrategico = 0;
    this.sucesorOperativo = 0;
    this.sucesorSoporte = 0;
  }

  capturar() {

    this.verSeleccion = this.opcionSeleccionado;
    console.log('# ' + this.opcionSeleccionado);
  }

  limparCampos() {
    this.carpeta = new Carpetas(0, '', 0, 0);
  }

  getFolders() {
    this.carpetaService.getFolders().subscribe(
      res => {
        this.folders = res;
      },
      err => console.error(err)
    );
  }

  getFoldersEstrategicos() {
    this.carpetaService.getFoldersEstrategicos().subscribe(
      res => {
        this.foldersEstrategicos = res;
      },
      err => console.error(err)
    );
  }

  getFoldersOperativos() {
    this.carpetaService.getFoldersOperativos().subscribe(
      res => {
        this.foldersOperativos = res;
      },
      err => console.error(err)
    );
  }

  getFoldersSoporte() {
    this.carpetaService.getFoldersSoporte().subscribe(
      res => {
        this.foldersSoporte = res;
      },
      err => console.error(err)
    );
  }

  getFolderById(id: number) {
    this.carpetaService.getFolderById(id)
      .subscribe(
        res => {
          this.folder = res;
          if (this.folder === '') {
            alert('Carpeta Vacia.');
          } else {
            if (this.folder[0].procesoid === 1) {
              this.foldersEstrategicos = this.folder;
              this.sucesorEstrategico = this.folder[0].sucesor;
            } else if (this.folder[0].procesoid === 2) {
              this.foldersOperativos = this.folder;
              this.sucesorOperativo = this.folder[0].sucesor;
            } else if (this.folder[0].procesoid === 3) {
              this.foldersSoporte = this.folder;
              this.sucesorSoporte = this.folder[0].sucesor;
            }
          }
        },
        err => console.error(err)
      );
  }

}
