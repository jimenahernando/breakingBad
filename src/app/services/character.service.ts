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
  
  getById(pId: number): Promise<Character[]>{
    return this.httpClient.get<Character[]>(this.baseUrl + pId).toPromise();
  }

  getByCategory(pCategory: string): Promise<Character[]>{
    console.log(pCategory);
    return this.httpClient.get<Character[]>(this.baseUrl + '?category=' + pCategory).toPromise();
  }

  getByName(pName: string): Promise<Character[]>{
    return this.httpClient.get<Character[]>(this.baseUrl + '?name=' + pName).toPromise();
  }

  getByPage(pPage:number = 1) : Promise<Character[]>{
    return this.httpClient.get<Character[]>(this.baseUrl + `?limit=10&offset=${(pPage-1)*10}`).toPromise();
  }
}
