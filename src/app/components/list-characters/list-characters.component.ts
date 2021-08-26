import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from 'src/app/services/character.service';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-list-characters',
  templateUrl: './list-characters.component.html',
  styleUrls: ['./list-characters.component.css']
})
export class ListCharactersComponent implements OnInit {

  arrCharacters: Character[];
 
  constructor(
    private characterService: CharacterService,
    private activatedRoute: ActivatedRoute
    ) {
    this.arrCharacters = [];
  }

  async ngOnInit(){
    this.arrCharacters = await this.characterService.getAll();
    
    this.activatedRoute.params?.subscribe(async params => {
      console.log(params);
      if(params.name){
        this.arrCharacters = await this.characterService.getByName(params.name);      
      }else{
        this.arrCharacters = await this.characterService.getAll();
      }
    })
    
    // queryParams
    this.activatedRoute.queryParams.subscribe(async queryParams => {
      console.log(queryParams);
      if(queryParams.category){
        this.arrCharacters = await this.characterService.getByCategory(queryParams.category);
      } else {
        this.arrCharacters = await this.characterService.getAll();
      }
    })
  }
}
