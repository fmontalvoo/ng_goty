import { Component, Input, OnDestroy, OnInit } from '@angular/core';


@Component({
  selector: 'app-horizontal-bar-chart',
  templateUrl: './horizontal-bar-chart.component.html',
  styleUrls: ['./horizontal-bar-chart.component.css']
})
export class HorizontalBarChartComponent implements OnInit, OnDestroy {

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

  @Input() public results!: any[];

  constructor() {
  }

  onSelect(event: any) {
    console.log(event);
  }


  ngOnInit(): void {

  }

  ngOnDestroy(): void {
  }
}
