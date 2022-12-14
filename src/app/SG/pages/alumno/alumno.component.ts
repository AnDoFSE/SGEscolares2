import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';


import { AlumnoModel } from 'src/app/models/alumno.model';

import { AlumnosService } from 'src/app/services/alumnos.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {

  alumno: AlumnoModel = new AlumnoModel();


  constructor( private AlumnosService: AlumnosService,
               private route: ActivatedRoute ) { }

  ngOnInit() {

    const id = ''+this.route.snapshot.paramMap.get('id');

    if ( id !== 'nuevo' ) {

      this.AlumnosService.getAlumno( id )
      .subscribe( (resp: any) => {
        this.alumno = resp;
        this.alumno.id = id;
      });

    }

  }

  guardar( form: NgForm ) {

    if ( form.invalid ) {
      console.log('Formulario no válido');
      return;
    }

    Swal.fire({
      title: 'Espere',
      text: 'Guardando información',
      icon: 'info',
      allowOutsideClick: false,
      showConfirmButton:false,
    });
    Swal.showLoading(Swal.getDenyButton());


    let peticion: Observable<any>;

    if ( this.alumno.id ) {
      peticion = this.AlumnosService.actualizarAlumno( this.alumno );
    } else {
      peticion = this.AlumnosService.crearAlumno( this.alumno );
    }

    peticion.subscribe( resp => {

      Swal.fire({
        title: this.alumno.nombre,
        text: 'Se actualizó correctamente',
        icon: 'success'
      });

    });



  }

}
