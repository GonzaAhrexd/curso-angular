import { Component } from '@angular/core';

@Component({
  selector: 'app-nuevo-componente',
  standalone: true,
  imports: [],
  template: `
    <div>
      <h1>Este es un nuevo componente</h1>
      <p>Este es un nuevo componente que hemos creado</p>  
  </div>
  `,
  styleUrl: './nuevo-componente.component.css'
})
export class NuevoComponenteComponent {

}
