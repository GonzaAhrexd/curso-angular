import { Component, EventEmitter, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProbandoComponent } from './components/probando/probando.component'
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserComponent } from './components/user/user.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { NuevoComponenteComponent } from './components/nuevo-componente/nuevo-componente.component';
import { JuegosTarjetaComponent } from './components/juegos-tarjeta/juegos-tarjeta.component';
import { RouterLink } from '@angular/router';

@Component({


  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet, ProbandoComponent, NavbarComponent,],
  templateUrl: './app.component.html',
  template: `
  <main  >
    <Navbar nombre="Gonza" />
      <router-outlet />
    <probando />
  </main>
  `,
})
export class AppComponent {



}
