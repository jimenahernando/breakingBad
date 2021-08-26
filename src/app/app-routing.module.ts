import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCharactersComponent } from './components/list-characters/list-characters.component';
import { SingleCharacterComponent } from './components/single-character/single-character.component';

const routes: Routes = [
  { path: '', component: ListCharactersComponent },
  { path: 'home', pathMatch: 'full', redirectTo: '/'},
  { path: 'characters/', component: ListCharactersComponent },
  { path: 'characters/:charId', component: SingleCharacterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
