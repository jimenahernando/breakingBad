import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCharactersComponent } from './components/list-characters/list-characters.component';
import { ThumbnailCharacterComponent } from './components/thumbnail-character/thumbnail-character.component';
import { SingleCharacterComponent } from './components/single-character/single-character.component';
import { FormsModule } from '@angular/forms';
import { Component404Component } from './components/component404/component404.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCharactersComponent,
    ThumbnailCharacterComponent,
    SingleCharacterComponent,
    Component404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
