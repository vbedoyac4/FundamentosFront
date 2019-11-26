import { Component, OnInit } from '@angular/core';
import { CrearproyectoService } from '../../../../service/proyectos/crearproyecto.service';
import { Proyecto } from '../../../../models/proyecto';

@Component({
  selector: 'app-crearproyecto',
  templateUrl: './crearproyecto.component.html',
  styleUrls: ['./crearproyecto.component.css']
})
export class CrearproyectoComponent implements OnInit {

  proyects: any = [];
  public proyectos: Proyecto;

  constructor(private proyectoservice: CrearproyectoService) {
    this.limpiarCampos();
  }

  SaveProyecto() {
    /*delete this.proyectos.IdProyecto;
    delete this.proyectos.IdActividad;
    this.proyectoservice.saveProyecto(this.proyectos)
    .subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    )*/
  }

  ngOnInit() {
    /*this.proyectoservice.getProyectos().subscribe(
      res => {
         this.proyects = res;
      } ,
      err => console.error(err)
    );*/
  }

  limpiarCampos() {
    this.proyectos = new Proyecto(0, '', '', '', '', '', 0, '', 0, 0, 0);
  }

}
