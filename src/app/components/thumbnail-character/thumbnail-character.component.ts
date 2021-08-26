import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/interfaces/character.interface';

@Component({
  selector: 'app-thumbnail-character',
  templateUrl: './thumbnail-character.component.html',
  styleUrls: ['./thumbnail-character.component.css']
})
export class ThumbnailCharacterComponent implements OnInit {

  @Input() character: Character | undefined; 

  constructor() {
  }

  ngOnInit(): void {
  }

}
