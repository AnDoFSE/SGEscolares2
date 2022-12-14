import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AlumnosComponent } from './pages/alumnos/alumnos.component';
import { CarrerasComponent } from './pages/carreras/carreras.component';
import { MaestrosComponent } from './pages/maestros/maestros.component';
import { MateriasComponent } from './pages/materias/materias.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
   
  ],
  exports:[

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class PaisModule { }