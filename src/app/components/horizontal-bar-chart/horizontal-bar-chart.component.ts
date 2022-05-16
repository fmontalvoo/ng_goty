import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-horizontal-bar-chart',
  templateUrl: './horizontal-bar-chart.component.html',
  styleUrls: ['./horizontal-bar-chart.component.css']
})
export class HorizontalBarChartComponent implements OnInit {
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
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'nightLights';

  constructor() {
  }

  onSelect(event: any) {
    console.log(event);
  }


  ngOnInit(): void {
  }

}
