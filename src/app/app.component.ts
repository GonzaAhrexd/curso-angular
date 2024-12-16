import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProbandoComponent } from './probando/probando.component'
import { NavbarComponent } from './navbar/navbar.component';
import { UserComponent } from './user/user.component';
import { FormularioComponent } from './formulario/formulario.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProbandoComponent, NavbarComponent, UserComponent, FormularioComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CursoAngularProbando';
  nombre:string = "Gonzalo"
}
