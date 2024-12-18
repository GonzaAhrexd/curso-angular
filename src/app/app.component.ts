import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProbandoComponent } from './components/probando/probando.component'
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterLink } from '@angular/router';

@Component({


  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, ProbandoComponent, NavbarComponent,],
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
