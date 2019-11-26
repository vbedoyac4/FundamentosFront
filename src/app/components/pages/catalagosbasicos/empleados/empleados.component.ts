import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../../../../service/catalogobasico/empleados.service';
import { Empleados} from '../../../../models/empleados';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  public empleado: Empleados;
  empleados: any [];

  constructor(private empleadoservice: EmpleadosService) {
    this.limpiarCampos();
  }

  SaveEmpleado() {
    /*this.empleadoservice.saveEmpleado(this.empleado)
    .subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    )*/
  }

  GetEmpleados() {
    /*this.empleadoservice.getEmpleados().subscribe(
      res => {
         this.empleados = res;
      } ,
      err => console.error(err)
    );*/
  }

  ngOnInit() {
   this.GetEmpleados();
  }

  limpiarCampos() {
    this.empleado = new Empleados(0, '', '', '', '', 0, 0);
  }

}
