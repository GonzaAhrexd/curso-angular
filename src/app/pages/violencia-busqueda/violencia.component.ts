import { Component, signal } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { obtenerVictimarioPorDNI } from '../../api/ping.service'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule ],
    templateUrl: './violencia.component.html',
})
export class ViolenciaComponent {
  respuesta = {};

  form = signal<FormGroup>(
      new FormGroup(
      {
        dni: new FormControl('', [Validators.required]),
      })
    )


  async obtenerRespuesta() {

    console.log(this.form().value.dni)


     const respuesta = await obtenerVictimarioPorDNI(this.form().value.dni);

     console.log(respuesta)

  }

}
