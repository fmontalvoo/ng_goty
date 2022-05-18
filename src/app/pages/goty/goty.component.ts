import { Component, OnInit } from '@angular/core';

import { Game } from 'src/app/interfaces/game';

import { GotyService } from 'src/app/services/goty.service';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {

  public games: Game[] = [];

  constructor(private gs: GotyService) { }

  ngOnInit(): void {
    this.gs.getGames().subscribe(response => {
      this.games = response;
    });
  }

}
