import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { HorizontalBarGraphComponent } from './horizontal-bar-graph/horizontal-bar-graph.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    NavbarComponent,
    HorizontalBarGraphComponent
  ],
  declarations: [
    NavbarComponent,
    HorizontalBarGraphComponent
  ],
})
export class ComponentsModule { }
