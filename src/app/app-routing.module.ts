import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//Importacion de componentes
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { UsuarioComponent } from './components/pages/seguridad/usuario/usuario.component';
import { RolesComponent } from './components/pages/seguridad/roles/roles.component';
import { PlataformadocumentalComponent } from './components/pages/plataformadocumental/plataformadocumental.component';
import { DocumentoComponent } from './components/pages/documentos/documento/documento.component';
import { FlujogramaComponent } from './components/pages/documentos/flujograma/flujograma.component';
import { NuevocasoComponent } from './components/pages/casos/nuevocaso/nuevocaso.component';
import { AdministrarcasosComponent } from './components/pages/casos/administrarcasos/administrarcasos.component';
import { CrearproyectoComponent } from './components/pages/proyecto/crearproyecto/crearproyecto.component';
import { AdministraracividadesComponent } from './components/pages/proyecto/administraracividades/administraracividades.component';
import { InicioComponent } from './components/pages/inicio/inicio.component';
import { EmpleadosComponent } from './components/pages/catalagosbasicos/empleados/empleados.component';
import { EmpresasComponent } from './components/pages/catalagosbasicos/empresas/empresas.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home/:id', component: HomeComponent, children: [
    {path: 'inicio', component: InicioComponent, outlet: 'home'},
    {path: 'dashboard/:id', component: DashboardComponent, outlet: 'home'},
    {path: 'plataformadocumental', component: PlataformadocumentalComponent, outlet: 'home'},
    {path: 'documentos/documento', component: DocumentoComponent, outlet: 'home'},
    {path: 'documentos/flujograma', component: FlujogramaComponent, outlet: 'home'},
    {path: 'casos/nuevocaso', component: NuevocasoComponent, outlet: 'home'},
    {path: 'casos/administrarcasos', component: AdministrarcasosComponent, outlet: 'home'},
    {path: 'proyecto/nuevoproyecto', component: CrearproyectoComponent, outlet: 'home'},
    {path: 'proyecto/administrarActividades', component: AdministraracividadesComponent, outlet: 'home'},
    {path: 'catalogo/empleados', component: EmpleadosComponent, outlet: 'home'},
    {path: 'catalogo/empresas', component: EmpresasComponent, outlet: 'home'},
    {path: 'seguridad/usuario/:id', component: UsuarioComponent, outlet: 'home'},
    {path: 'seguridad/roles', component: RolesComponent, outlet: 'home'},
    {path: '', component: InicioComponent, outlet: 'home'}
  ]},
  {path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
