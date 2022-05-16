import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-horizontal-bar-chart',
  templateUrl: './horizontal-bar-chart.component.html',
  styleUrls: ['./horizontal-bar-chart.component.css']
})
export class HorizontalBarChartComponent implements OnInit, OnDestroy {
  public results: any[] = [
    {
      "name": "Juego#1",
      "value": 28
    },
    {
      "name": "Juego#2",
      "value": 21
    },
    {
      "name": "Juego#3",
      "value": 14
    },
    {
      "name": "Juego#4",
      "value": 7
    }
  ];

  // options
  public showXAxis = true;
  public showYAxis = true;
  public gradient = true;
  public showLegend = true;
  public showXAxisLabel = true;
  public xAxisLabel = 'Juegos';
  public showYAxisLabel = true;
  public yAxisLabel = 'Votos';

  public colorScheme = 'nightLights';

  private interval: any;

  constructor() {
  }

  onSelect(event: any) {
    console.log(event);
  }


  ngOnInit(): void {
    this.interval = setInterval(() => {
      console.log('tick');
      const newResults = [...this.results];
      // const newResults = this.results.slice();
      for (const result of newResults) {
        result.value = Math.floor((Math.random() * (100 - 1 + 25)) + 25);
      }
      this.results = newResults;
    }, 2000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
