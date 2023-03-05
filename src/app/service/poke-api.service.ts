import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokeAPIService {

  private url: string = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=50";
  constructor(
    private http: HttpClient
  ) { }

  apiListAllPokemons(url: any = ''): Observable<any> {
    return this.http.get<any>(url ? url : this.url).pipe(
      tap(res => res),
      tap(res => {
        res.results.map((resPokemons: any) => {

          this.apiGetPokemons(resPokemons.url).subscribe(
            res => resPokemons.status = res
          )

        })
      })
    )
  }

  apiGetPokemons(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(
      map(
        res => res
      )
    )
  }
}
