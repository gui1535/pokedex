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
  private setAllPokemons: any;
  public getAllPokemons: any;


  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons().subscribe(
      res => {
        this.setAllPokemons = res.results;
        this.getAllPokemons = res.results;
      }
    );
  }

  getSearch(value: string) {
    const filter = this.setAllPokemons.filter((res: any) => {
      return !res.name.indexOf(value.toLowerCase());
    });


    this.getAllPokemons = filter;
  }
}
