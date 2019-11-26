import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../../service/seguridad/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public usuario: string;
  public user: any = [];
  constructor(private router: Router, private activedRoute: ActivatedRoute, private usuarioService: UsuarioService) { }

  ngOnInit() {
    const params = this.activedRoute.snapshot.params;
    this.usuario = params.id;
    if (this.usuario === '') {
      location.href = 'http://localhost:4200/login';
    }
    this.getUserById();
  }

  getUserById() {
    this.usuarioService.getDataUserByUsername(this.usuario)
      .subscribe(
        res => {
          this.user = res;
        },
        err => console.error(err)
      );
  }

}
