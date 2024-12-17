import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-juegos-tarjeta',
  standalone: true,
  imports: [],
  templateUrl: './juegos-tarjeta.component.html',
})
export class JuegosTarjetaComponent {
 
  @Input() nombre: string = "";
  @Input() lanzamiento: string = "";
  @Input() imagen: string = "";
  @Input() genero: string = "";

  @Output() favouriteGame = new EventEmitter<string>();

  
  fav(gameName: string){
    alert("Ahora tu juego favorito es: " + gameName)
    this.favouriteGame.emit(gameName)

  }
}
