import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DxGanttModule } from 'devextreme-angular';
import { DxDiagramModule } from 'devextreme-angular';
import { DxHtmlEditorModule } from 'devextreme-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { UsuarioComponent } from './components/pages/seguridad/usuario/usuario.component';
import { RolesComponent } from './components/pages/seguridad/roles/roles.component';
import { PlataformadocumentalComponent } from './components/pages/plataformadocumental/plataformadocumental.component';
import { DocumentoComponent } from './components/pages/documentos/documento/documento.component';
import { FlujogramaComponent } from './components/pages/documentos/flujograma/flujograma.component';
import { NuevocasoComponent } from './components/pages/casos/nuevocaso/nuevocaso.component';
import { AdministrarcasosComponent } from './components/pages/casos/administrarcasos/administrarcasos.component';
import { CrearproyectoComponent } from './components/pages/proyecto/crearproyecto/crearproyecto.component';
import { AdministraracividadesComponent } from './components/pages/proyecto/administraracividades/administraracividades.component';
import { Service } from './service/administraractividades.service';
import { InicioComponent } from './components/pages/inicio/inicio.component';
import { EmpresasComponent } from './components/pages/catalagosbasicos/empresas/empresas.component';
import { EmpleadosComponent } from './components/pages/catalagosbasicos/empleados/empleados.component';
import { CrearaccorrectivaComponent } from './components/pages/accioncorrectiva/crearaccorrectiva/crearaccorrectiva.component';
import { CrearinconformidadComponent } from './components/pages/noconformidades/crearinconformidad/crearinconformidad.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    UsuarioComponent,
    RolesComponent,
    PlataformadocumentalComponent,
    DocumentoComponent,
    FlujogramaComponent,
    NuevocasoComponent,
    AdministrarcasosComponent,
    CrearproyectoComponent,
    AdministraracividadesComponent,
    InicioComponent,
    EmpresasComponent,
    EmpleadosComponent,
    CrearaccorrectivaComponent,
    CrearinconformidadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DxGanttModule,
    DxDiagramModule,
    DxHtmlEditorModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    NgbModule
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
