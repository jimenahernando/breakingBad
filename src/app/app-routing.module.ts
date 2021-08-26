import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component404Component } from './components/component404/component404.component';
import { ListCharactersComponent } from './components/list-characters/list-characters.component';
import { SingleCharacterComponent } from './components/single-character/single-character.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: ListCharactersComponent },
  { path: 'home/:page', component: ListCharactersComponent },
  { path: 'search/:name', component: ListCharactersComponent },
  { path: 'characters/:charId', component: SingleCharacterComponent},
  { path: '**', component: Component404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
