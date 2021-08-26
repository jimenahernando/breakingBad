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
  arrPages: number[];
  showPagination: boolean;

  constructor(
    private characterService: CharacterService,
    private activatedRoute: ActivatedRoute
    ) {
    this.arrCharacters = [];
    this.showPagination = true;
    this.arrPages = [];
  }

  async ngOnInit(){
    const allCharacters = await this.characterService.getAll();
    const numPages = Math.ceil(allCharacters.length / 10);

    // array vacio de 7 elementos
    this.arrPages = new Array(numPages);
    
    this.activatedRoute.params?.subscribe(async params => {
      // console.log(params);
      if(params.name){
        this.arrCharacters = await this.characterService.getByName(params.name);      
        this.showPagination = false;
      }else if(params.page){
        this.arrCharacters = await this.characterService.getByPage(Number(params.page));
        this.showPagination = true;
      }else{
        this.arrCharacters = await this.characterService.getByPage();
        this.showPagination = true;
      }
    })
    
    // queryParams
    this.activatedRoute.queryParams.subscribe(async queryParams => {
      // console.log(queryParams);
      if(queryParams.category){
        this.arrCharacters = await this.characterService.getByCategory(queryParams.category);
        this.showPagination = false;
      } else {
        this.arrCharacters = await this.characterService.getByPage();
        this.showPagination = true;
      }
    })
  }
}
