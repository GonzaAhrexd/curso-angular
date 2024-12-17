import { Routes } from '@angular/router';

import { AppComponent } from './pages/home/app.home.component';
import { NotFoundComponentComponent } from './pages/not-found-component/not-found-component.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';



export const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'pokemon', component: PokemonComponent},
    { path: '**', component: NotFoundComponentComponent } // Vista 404

];
