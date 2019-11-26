import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../models/usuario';
import { UsuarioService } from 'src/app/service/seguridad/usuario.service';
import { $ } from 'protractor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public usuario: Usuario;
  credencialCorrecta: boolean;
  showModal: boolean;

  constructor(private router: Router, private usuarioService: UsuarioService) {
    this.limpiarCampos();
  }

  ngOnInit() {
  }

  onSubmit() {
    delete this.usuario.id;
    delete this.usuario.nombre;
    delete this.usuario.apellido;
    delete this.usuario.email;
    delete this.usuario.estado;
    delete this.usuario.rolid;
    this.showModal = true;
    this.usuarioService.signin(this.usuario)
        .subscribe(
          res => {
            if (res.status === 200) {
              location.href = 'http://localhost:4200/home/' + this.usuario.username;
              //this.router.navigate(['home']);
              this.credencialCorrecta = true;
              this.showModal = false;
            } else if (res.status === 404) {
              this.credencialCorrecta = false;
              this.usuario.password = '';
              this.showModal = false;
            }
          },
          err => {
            console.log(err);
            alert('Status: 500, Message: Internal Server Error ');
            this.showModal = false;
          }
        );
  }

  limpiarCampos() {
    this.usuario = new Usuario(0, '', '', '', '', '', '',0);
  }

}
