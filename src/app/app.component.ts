import { Component, EventEmitter, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProbandoComponent } from './probando/probando.component'
import { NavbarComponent } from './navbar/navbar.component';
import { UserComponent } from './user/user.component';
import { FormularioComponent } from './formulario/formulario.component';
import { NuevoComponenteComponent } from './nuevo-componente/nuevo-componente.component';
import { JuegosTarjetaComponent } from './juegos-tarjeta/juegos-tarjeta.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [JuegosTarjetaComponent, NuevoComponenteComponent, RouterOutlet, ProbandoComponent, NavbarComponent, UserComponent, FormularioComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CursoAngularProbando';
  nombre:string = "Gonzalo"
  favGame: string = ""

  getFavouriteGame(gameName: string){
    this.favGame = gameName
  }
  
  
  games = [
    {
      id: 1,
      nombre: "The Legend of Zelda: Breath of the Wild",
      lanzamiento: "2017",
      imagen: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000000025/7137262b5a64d921e193653f8aa0b722925abc5680380ca0e18a5cfd91697f58",
      genero: "Aventura"
    },
    {
      id: 2,
      nombre: "Elden Ring",
      lanzamiento: "2022",
      imagen: "https://p325k7wa.twic.pics/high/elden-ring/elden-ring/00-page-setup/elden-ring-new-header-mobile.jpg?twic=v1/resize=760/step=10/quality=80",
    },
    {
      id: 3,
      nombre: "Minecraft",
      lanzamiento: "2011",
      imagen: "https://store-images.s-microsoft.com/image/apps.29741.14581193029730121.5999c68b-7fd8-48ec-b0cb-3e37e1d7ec03.38839d35-0654-480a-b909-a5107b3f9d14?q=90&w=480&h=270",
      genero: "Sandbox"

    }
  ]

  

}
