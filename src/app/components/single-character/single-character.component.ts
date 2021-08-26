import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/interfaces/character.interface';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-single-character',
  templateUrl: './single-character.component.html',
  styleUrls: ['./single-character.component.css']
})
export class SingleCharacterComponent implements OnInit {

  character: Character | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private characterService: CharacterService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async params=> {
      const id = Number(params.charId);
      const characters = await this.characterService.getById(id);
      this.character = characters[0];
    })
  }

}
