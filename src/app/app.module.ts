import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import {
  MatGridListModule,
  MatIconModule,
  MatButtonModule,
} from "@angular/material";

import { AppComponent } from './app.component';
import { LeftBarComponent } from './left-bar/left-bar.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MainViewComponent } from './main-view/main-view.component';

// @NgModule({
//   exports: [MatGridListModule]
// })
@NgModule({
  declarations: [
    AppComponent,
    LeftBarComponent,
    MainMenuComponent,
    MainViewComponent
    // material components
    // MatGridListModule
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
