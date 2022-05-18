import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Game } from '../interfaces/game';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GotyService {

  private url: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getGames() {
    return this.http.get<Game[]>(`${this.url}/api/goty`);
  }
}
