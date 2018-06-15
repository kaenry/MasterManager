import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LeftBarComponent } from './left-bar/left-bar.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MainViewComponent } from './main-view/main-view.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

registerLocaleData(zh);

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
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule {}
