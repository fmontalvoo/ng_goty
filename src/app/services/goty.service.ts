import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Game } from '../interfaces/game';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GotyService {

  private games: Game[] = [];
  private url: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public getGames() {
    if (!(!!this.games.length)) {
      console.info('Http');
      return this.http.get<Game[]>(`${this.url}/api/goty`)
        .pipe(
          tap(data => this.games = data)
        );
    }
    console.info('Cache');
    return of(this.games);
  }

  public vote(game: Game) {
    return this.http.post(`${this.url}/api/goty/${game.id}`, {})
      .pipe(
        catchError(e => {
          return of(e.error);
        })
      );
  }
}
