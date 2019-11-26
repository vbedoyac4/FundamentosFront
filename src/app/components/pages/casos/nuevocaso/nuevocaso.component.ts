import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NuevocasoService } from '../../../../service/casos/nuevocaso.service';
import { Casos } from 'src/app/models/casos';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nuevocaso',
  templateUrl: './nuevocaso.component.html',
  styleUrls: ['./nuevocaso.component.css']
})
export class NuevocasoComponent implements OnInit {
  public FechaRequerida;

  /* Clases para los modelos */
  public ModeloCasos: Casos;
  public ModeloDetalleCasos: Casos;

  /* Listas para combo box */
  public ListatipoCaso: any = [];
  public ListatipoSolicitud: any = [];
  public Listaprioridad: any = [];


  constructor(private casonuevoService: NuevocasoService, private router: Router, private toastr: ToastrService) {
    this.getTiposCaso();
    this.getTipoSolicitud();
    this.getPrioridad();
    this.limparCampos();
    this.FechaRequerida = { day: this.ModeloCasos.FechaRequerida.getDate(),
      month: (this.ModeloCasos.FechaRequerida.getMonth() + 1),
      year: this.ModeloCasos.FechaRequerida.getFullYear() };
  }

  ngOnInit() {
  }

  getTiposCaso() {
    this.casonuevoService.getTipoCasos().subscribe(
      res => {
        this.ListatipoCaso = res;
      },
      err => console.error(err)
    );
  }

  getTipoSolicitud() {
    this.casonuevoService.getTipoSolicitud().subscribe(
      res => {
        this.ListatipoSolicitud = res;
      },
      err => console.error(err)
    );
  }

  getPrioridad() {
    this.casonuevoService.getPrioridad().subscribe(
      res => {
        this.Listaprioridad = res;
      },
      err => console.error(err)
    );
  }

  limparCampos() {
    this.ModeloCasos = new Casos(0, '', '', 0, 0, new Date(), 0, 9, '', 0, '', new Date());
  }

  guardarCaso() {
    this.ModeloCasos.FechaRequerida = new Date(`${this.FechaRequerida.month}-${this.FechaRequerida.day}-${this.FechaRequerida.year}`);
    console.log(this.ModeloCasos);
    console.log(this.FechaRequerida);
    this.limparCampos();
    this.toastr.success('Datos Guardados Correctamente.', 'Success');
    //this.toastr.info('Datos Guardados Correctamente.', 'Info');
    //this.toastr.warning('Datos Guardados Correctamente.', 'Warning');
    //this.toastr.error('Datos Guardados Correctamente.', 'Error');
  }

}
