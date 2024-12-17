import { Component } from '@angular/core';

@Component({
  selector: 'User',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  usuario: String = "Gonza"
  loggedIn: boolean = true

}
