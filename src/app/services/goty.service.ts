import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Game } from '../interfaces/game';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GotyService {

  private games: Game[] = [];
  private url: string = environment.apiUrl;

  constructor(private http: HttpClient, private afs: AngularFirestore) { }

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

  public getGOTY() {
    return this.afs
      .collection<Game>('goty')
      .snapshotChanges()
      .pipe(
        map(
          doc => {
            if (doc) {
              const games = doc.map(
                data => {
                  const payload = data.payload.doc;
                  const goty = payload.data();
                  return goty;
                }
              );
              return games;
            }
            return [];
          }
        )
      );
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
