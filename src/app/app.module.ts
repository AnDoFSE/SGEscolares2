import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AlumnoComponent } from './SG/pages/alumno/alumno.component';
import { AlumnosComponent } from './SG/pages/alumnos/alumnos.component';

import { CarrerasComponent } from './SG/pages/carreras/carreras.component';
import { CarreraComponent } from './SG/pages/carrera/carrera.component';

import { MaestroComponent } from './SG/pages/maestro/maestro.component';
import { MaestrosComponent } from './SG/pages/maestros/maestros.component';

import { MateriaComponent } from './SG/pages/materia/materia.component';
import { MateriasComponent } from './SG/pages/materias/materias.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnoComponent,
    AlumnosComponent,

    CarrerasComponent,
    CarreraComponent,

    MaestroComponent,
    MaestrosComponent,

    MateriaComponent,
    MateriasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
    SharedModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
