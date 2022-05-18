import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { Game } from 'src/app/interfaces/game';

import { GotyService } from 'src/app/services/goty.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public games: { name: string, value: number }[] = [];

  constructor(private gs: GotyService) { }

  ngOnInit(): void {
    this.gs.getGOTY()
      .pipe(
        map(
          data =>
            data.map(({ name, votes }) => ({ name: name, value: votes }))
          // data.map(game => ({ name: game.name, value: game.votes }))
        )
      )
      .subscribe(response => {
        this.games = response;
      });
  }

}
