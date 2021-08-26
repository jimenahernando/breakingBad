import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from './interfaces/character.interface';
import { CharacterService } from './services/character.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'BREAKING BAD';
  search: string =  "";
  // arrCategories: string[];

  constructor( 
    private router: Router){
    // this.arrCategories = [];
  }

  // async ngOnInit() {
  //   // this.arrCharacters = await this.characterService.getAll();
  //   // this.arrCategories = [... new Set(this.arrCharacters.map(character => character.category))];
  // }

  filterByName(){
    this.router.navigate(['/search', this.search]);
    this.search= "";
  }
  
  filterByCategory($event: any): void{
    if ($event.target.value !== "") {
      this.router.navigateByUrl('/home' + '\?category\=' + $event.target.value);
    } else {
      this.router.navigate(['/home']);
    }
  }
}
