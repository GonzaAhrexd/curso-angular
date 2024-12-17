import { Routes } from '@angular/router';

import { AppComponent } from './pages/home/app.home.component';
import { NotFoundComponentComponent } from './pages/not-found-component/not-found-component.component';



export const routes: Routes = [
    { path: '', component: AppComponent },
    { path: '**', component: NotFoundComponentComponent } // Vista 404

];
