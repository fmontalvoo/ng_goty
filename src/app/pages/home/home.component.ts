import { Component, OnInit } from '@angular/core';

import { GotyService } from 'src/app/services/goty.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private gs: GotyService) { }

  ngOnInit(): void {
    this.gs.getGames();
  }

}
