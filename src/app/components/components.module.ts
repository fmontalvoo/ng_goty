import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { NavbarComponent } from './navbar/navbar.component';
import { HorizontalBarChartComponent } from './horizontal-bar-chart/horizontal-bar-chart.component';
import { CardComponent } from './card/card.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    NgxChartsModule,
  ],
  exports: [
    CardComponent,
    NavbarComponent,
    HorizontalBarChartComponent,
  ],
  declarations: [
    CardComponent,
    NavbarComponent,
    HorizontalBarChartComponent,
  ],
})
export class ComponentsModule { }
