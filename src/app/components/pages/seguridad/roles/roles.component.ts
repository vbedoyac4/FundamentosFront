import { Component, OnInit } from '@angular/core';
import { Roles } from '../../../../models/roles';
import { RolesService } from '../../../../service/seguridad/roles.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  public roles: Roles;
  public CamposVacios: boolean;
  public getAllRoles: any = [];
  public getAllDeptos: any = [];
  public rol: any = [];
  editRol: boolean;

  constructor(private rolService: RolesService, private router: Router, private toastr: ToastrService) {
    this.limparCampos();
  }

  ngOnInit() {
    this.getRoles();
    this.getDepartamentos();
  }

  limparCampos() {
    this.roles = new Roles(0, '', 0);
  }

  getRoles() {
    this.rolService.getRoles().subscribe(
      res => {
        this.getAllRoles = res;
      },
      err => console.error(err)
    );
  }

  getDepartamentos() {
    this.rolService.getDepartamentos().subscribe(
      res => {
        this.getAllDeptos = res;
      },
      err => console.error(err)
    );
  }

  onSaveRoles() {
    console.log('create rol');
    if (this.roles.rol === '' || this.roles.deptoid === 0) {
       this.CamposVacios = true;
       this.toastr.warning('Todos los campos son requeridos.', 'Advertencia');
    } else {
      this.CamposVacios = false;
      this.rolService.saveRol(this.roles)
        .subscribe(
          res => {
            if (res.status === 200) {
              this.toastr.success('Datos Guardados Correctamente.', 'Exito');
              this.limparCampos();
              this.getRoles();
            }
          },
          err => {
            if (err.status === 404) {
              this.toastr.error('Error al guardar los Datos.', 'Error');
            }
          }
        );

    }
  }

  getRolById(id: number) {
    this.roles = new Roles(0, '', 0);
    this.editRol = true;
    this.rolService.getRolById(id)
      .subscribe(
        res => {
          this.rol = res;
          this.roles = new Roles(
            this.rol[0].idroles,
            this.rol[0].rol,
            this.rol[0].deptoid);
        },
        err => console.error(err)
      );
  }

  updateRol() {
    console.log('edit rol');
    this.rolService.updateRol(this.roles.idroles, this.roles)
    .subscribe(
      res => {
        if (res.status === 200) {
          this.toastr.success('Datos Modificados Correctamente.', 'Exito');
          this.limparCampos();
          this.getRoles();
        }
      },
      err => {
        if (err.status === 404) {
          this.toastr.error('Error al Modificar los Datos.', 'Error');
        }
      }
    );
  }

}
