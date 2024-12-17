import { Component } from '@angular/core';
import { getPokemon } from '../../api/pokemon.service'; 
@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './pokemon.component.html',
})
export class PokemonComponent {
  public pokemon: any = [];
  constructor() {
    this.fetchPokemon();
  }
  async fetchPokemon() {
    this.pokemon = await getPokemon();
  }
}
