import { Component, Input } from '@angular/core';
import { ping } from '../../api/ping.service';
@Component({
  selector: 'Navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  // styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() nombre:string = ""; 
  estado = true;
  bateria = 100;
  respuesta = "";

  constructor(){
    this.pingApi()
  }

  async pingApi(){
    this.respuesta = await ping()
  }

  greet(){
    console.log("Hola")
  }
}