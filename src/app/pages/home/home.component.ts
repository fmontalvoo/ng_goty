import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

import { GotyService } from 'src/app/services/goty.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  public games: { name: string, value: number }[] = [];

  private unsubscribe = new Subject<void>();

  constructor(private gs: GotyService) { }

  ngOnInit(): void {
    this.gs.getGOTY()
      .pipe(
        takeUntil(this.unsubscribe),
        map(
          data =>
            data.map(({ name, votes }) => ({ name: name, value: votes }))
          // data.map(game => ({ name: game.name, value: game.votes }))
        )
      )
      .subscribe(response => {
        console.log(response);
        this.games = response;
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
