import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2'

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

  public vote(game: Game): void {
    this.gs.vote(game).subscribe((response: { ok?: boolean, message?: string }) => {
      console.info(game.id);
      console.info(response);
      if (response.ok) {
        Swal.fire({
          title: 'Voto registrado',
          text: `Gracias por su voto a ${game.name}`,
          icon: 'success',
          confirmButtonText: 'Ok'
        });
      } else {
        Swal.fire({
          title: 'Error',
          text: response.message,
          icon: 'error',
          confirmButtonText: 'Ok'
        });
      }
    });
  }

}
