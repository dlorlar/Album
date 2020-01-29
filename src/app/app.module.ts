import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SmileComponent } from './smile/smile.component';
import {CommonModule} from '@angular/common';
import { AppAlbumComponent } from './app-album/app-album.component';
@NgModule({
  declarations: [
    AppComponent,
    SmileComponent,
    AppAlbumComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
