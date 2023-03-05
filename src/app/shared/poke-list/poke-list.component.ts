import { Component } from '@angular/core';
import { PokeAPIService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent {
  constructor(
    private pokeApiService: PokeAPIService
  ) {
  }
  public getAllPokemons: any;


  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons().subscribe(
      res => {
        this.getAllPokemons = res.results;
        console.log(this.getAllPokemons)
      }
    );
  }
}
