import { Component, Input } from '@angular/core';

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
  
  greet(){
    console.log("Hola")
  }
}