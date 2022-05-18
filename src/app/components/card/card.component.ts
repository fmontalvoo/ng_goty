import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Game } from 'src/app/interfaces/game';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() public game!: Game;

  @Output() private onVote: EventEmitter<Game>;

  constructor() {
    this.onVote = new EventEmitter();
  }

  ngOnInit(): void {
  }

  public emitVote(game: Game): void {
    this.onVote.emit(game);
  }

}
