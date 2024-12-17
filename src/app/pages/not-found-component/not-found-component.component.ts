import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found-component',
  standalone: true,
  imports: [RouterLink],
  template: `
  <div class="flex flex-col items-center justify-center h-screen"> 
    <h1 class="text-8xl">404 Not Found</h1>
    <p class="text-2xl">Lo sentimos, la página que buscas no existe.</p>
    <a routerLink="/" class="cursor-pointer bg-red-600 h-10 flex items-center justify-center w-40 rounded-lg hover:bg-red-800 mt-5">
      Volver al inicio
    </a>
  </div>
  `,
})
export class NotFoundComponentComponent {

}
