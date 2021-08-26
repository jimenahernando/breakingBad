import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-list-characters',
  templateUrl: './list-characters.component.html',
  styleUrls: ['./list-characters.component.css']
})
export class ListCharactersComponent implements OnInit {

  arrCharacters: Character[];
  arrCategories: string[];

  constructor(private characterService: CharacterService ) {
    this.arrCharacters = [];
    this.arrCategories = [];
  }

  async ngOnInit(): Promise<any> {
    this.arrCharacters = await this.characterService.getAll()
    
    this.arrCategories = [... new Set(this.arrCharacters.map(character => character.category))];
  }

  async filterByCategory(pForm: any){
    const category = pForm.value;
    console.log(category)
    this.arrCharacters = await this.characterService.getByCategory(category);
    console.log(this.arrCharacters);
  }
  
  async filterName($event: any){
    const name = $event.target.value;
    this.arrCharacters = await this.characterService.getByName(name);
    console.log(this.arrCharacters);
  }
}
