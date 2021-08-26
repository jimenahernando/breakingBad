import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  baseUrl = '';

  constructor( private httpClient: HttpClient) { 
    this.baseUrl = 'https://www.breakingbadapi.com/api/characters/';
  }

  getAll() : Promise<Character[]>{
    return this.httpClient.get<Character[]>(this.baseUrl).toPromise();
  }
  
  getById(idCaracter: number): Promise<Character[]>{
    return this.httpClient.get<Character[]>(this.baseUrl + idCaracter).toPromise();
  }

  getByCategory(category: string): Promise<Character[]>{
    return this.httpClient.get<Character[]>(this.baseUrl + '?category =' + category).toPromise();
  }

  getByName(name: string): Promise<Character[]>{
    return this.httpClient.get<Character[]>(this.baseUrl + '?name='+ name).toPromise();
  }
}
