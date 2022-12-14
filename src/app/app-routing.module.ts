import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlumnosComponent } from './SG/pages/alumnos/alumnos.component';
import { AlumnoComponent } from './SG/pages/alumno/alumno.component';

import { CarrerasComponent } from "./SG/pages/carreras/carreras.component";
import { CarreraComponent } from "./SG/pages/carrera/carrera.component";

import { MaestrosComponent } from "./SG/pages/maestros/maestros.component";
import { MaestroComponent } from "./SG/pages/maestro/maestro.component";

import { MateriasComponent } from "./SG/pages/materias/materias.component";
import { MateriaComponent } from './SG/pages/materia/materia.component';

const routes: Routes = [
  { path: 'alumnos', component: AlumnosComponent },
  { path: 'alumno/:id', component: AlumnoComponent },
  //{ path: '**', pathMatch: 'full', redirectTo: '' },
  
  { path:'carreras', component: CarrerasComponent},
  { path:'carrera/:id',component: CarreraComponent},
  //{ path: '**', pathMatch: 'full', redirectTo: '' },

  { path:'maestros', component: MaestrosComponent},
  { path:'maestro/:id',component: MaestroComponent},
  //{ path: '**', pathMatch: 'full', redirectTo: '' },

  { path:'materias', component: MateriasComponent},
  { path:'materia/:id',component: MateriaComponent},
  //{ path: '**', pathMatch: 'full', redirectTo: '' },

];

@NgModule({
    imports:[
        RouterModule.forRoot( routes )
    ],
    exports:[
        RouterModule
    ]
})

export class AppRoutingModule { }