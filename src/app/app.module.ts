import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';
import { GotyComponent } from './pages/goty/goty.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    GotyComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
