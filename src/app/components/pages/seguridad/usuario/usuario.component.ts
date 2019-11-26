import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../../models/usuario';
import { UsuarioService } from '../../../../service/seguridad/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  public usuarioLogeado: string;
  public DeptoId = 0;
  public usuario: Usuario;
  public CoincideContrasenias: boolean;
  public CamposVacios: boolean;
  public ConfirmarContrasenia: string = '';
  public users: any = [];
  public user: any = [];
  public getAllroles: any = [];
  public getAlldepartamento: any = [];
  editUser: boolean;

  constructor(private usuarioService: UsuarioService,
              private router: Router,
              private activedRoute: ActivatedRoute,
              private toastr: ToastrService) {
    this.limparCampos();
  }

  ngOnInit() {
    const params = this.activedRoute.snapshot.params;
    this.usuarioLogeado = params.id;
    console.log('el usuario es: ' + this.usuarioLogeado);
    this.getUsers();
    this.getDepartamentos();
  }

  getDepartamentos() {
    this.usuarioService.getDepartamentos().subscribe(
      res => {
        this.getAlldepartamento = res;
      },
      err => console.error(err)
    );
  }

  getRolesByDeptoId() {
    this.usuarioService.getRolesByDeptoId(this.DeptoId).subscribe(
      res => {
        this.getAllroles = res;
      },
      err => console.error(err)
    );
  }

  onSaveUser() {
    if (this.usuario.nombre === '' || this.usuario.apellido === ''
     || this.usuario.email === '' || this.usuario.username === ''
     || this.usuario.password === '' || this.ConfirmarContrasenia === ''
     || this.usuario.rolid === 0 || this.DeptoId === 0) {
       this.CamposVacios = true;
       this.toastr.warning('Todos los campos son requeridos.', 'Advertencia');
    } else {
      this.CamposVacios = false;
      if (this.usuario.password !== this.ConfirmarContrasenia) {
        this.CoincideContrasenias = false;
        this.toastr.warning('La contraseña no coincide con la confirmacion.', 'Advertencia');
        this.ConfirmarContrasenia = '';
        this.usuario.password = '';
      } else {
        this.CoincideContrasenias = true;
        this.usuario.estado = 'A';
        this.usuarioService.saveUser(this.usuario)
        .subscribe(
          res => {
            if (res.status === 200) {
              this.toastr.success('Datos Guardados Correctamente.', 'Exito');
              this.limparCampos();
              this.getUsers();
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
  }

  limparCampos() {
    this.usuario = new Usuario(0, '', '', '', '', '', '', 0);
    this.ConfirmarContrasenia = '';
    this.DeptoId = 0;
  }

  getUsers() {
    this.usuarioService.getUsers().subscribe(
      res => {
        this.users = res;
      },
      err => console.error(err)
    );
  }

  getUserById(id: number, iddepto: number) {
    this.limparCampos();
    this.editUser = true;
    this.usuarioService.getUserById(id)
      .subscribe(
        res => {
          this.DeptoId = iddepto;
          this.getRolesByDeptoId();
          this.user = res;
          this.usuario = new Usuario(
            this.user[0].id,
            this.user[0].username,
            '',
            this.user[0].nombre,
            this.user[0].apellido,
            this.user[0].email,
            this.user[0].estado,
            this.user[0].rolid);
        },
        err => console.error(err)
      );
  }

  updateUser() {
    console.log('edit user');
    this.usuarioService.updateUser(this.usuario)
    .subscribe(
      res => {
        if (res.status === 200) {
          this.toastr.success('Datos Modificados Correctamente.', 'Exito');
          this.limparCampos();
          this.getUsers();
          location.reload();
        }
      },
      err => {
        if (err.status === 500) {
          this.toastr.error('Error al Modificar los Datos.', 'Error');
        }
      }
    );
  }

}
