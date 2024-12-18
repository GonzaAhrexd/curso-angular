import { Routes } from '@angular/router';

import { AppComponent } from './pages/home/app.home.component';
import { NotFoundComponentComponent } from './pages/not-found-component/not-found-component.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { ViolenciaComponent } from './pages/violencia-busqueda/violencia.component'


export const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'pokemon', component: PokemonComponent},
    { path: 'violencia', component: ViolenciaComponent},
    { path: '**', component: NotFoundComponentComponent }, // Vista 404
];
