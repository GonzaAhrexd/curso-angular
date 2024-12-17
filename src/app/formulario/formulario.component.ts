import { JsonPipe } from '@angular/common';
import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
 @Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe ],
  templateUrl: './formulario.component.html',
})
export class FormularioComponent {
  form = signal<FormGroup>(
    new FormGroup(
    {
      nombre: new FormControl('', [Validators.required]),
      fecha_de_salida: new FormControl('', [Validators.required]),
      imagen: new FormControl('', [Validators.required]),
      categoria: new FormControl('', [Validators.required]),
    })
  )

  valores: any = {};
  @Output() newGame = new EventEmitter();

  addGame() {
    if (this.form().valid) {
      this.valores = this.form().value;

      Swal.fire({
        title: '¿Estás seguro?',
        text: '¿Quieres añadir este juego?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Sí',
        cancelButtonText: 'No',
      }).then((result) => {
        if (result.isConfirmed) {
          this.newGame.emit(this.valores);
          Swal.fire('Juego añadido', '', 'success');
        }
      })

      console.log(this.valores)
    } else {
      alert('Por favor completa todos los campos obligatorios.');
    }
  }

  
  
}
