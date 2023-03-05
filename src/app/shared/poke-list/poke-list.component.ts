import { Component, HostListener } from '@angular/core';
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
  private setAllPokemons: any = [];
  public getAllPokemons: any = [];
  public nextPokemon: string = "";

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    this.pokeApiService.apiListAllPokemons().subscribe(
      res => {
        this.setAllPokemons = res.results;
        this.getAllPokemons = res.results
        this.nextPokemon = res.next;
      }
    );
  }
  getSearch(value: string) {
    const filter = this.setAllPokemons.filter((res: any) => {
      return !res.name.indexOf(value.toLowerCase());
    });


    this.getAllPokemons = filter;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    if (this.getAllPokemons && (window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight) {
      // this.getPokemons(this.nextPokemon);
      console.log('Chegou')
      this.pokeApiService.apiListAllPokemons(this.nextPokemon).subscribe(
        res => {
          this.setAllPokemons = this.setAllPokemons.concat(res.results);
          this.getAllPokemons = this.getAllPokemons.concat(res.results);
          this.nextPokemon = res.next;
        }
      );
    }
  }

}
