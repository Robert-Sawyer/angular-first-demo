import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    const heroes = [
      {id: 11, name: 'Falcon'},
      {id: 12, name: 'Hulk'},
      {id: 13, name: 'Hawkeye'},
      {id: 14, name: 'Quicksilver'},
      {id: 15, name: 'Magneto'}
    ]
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
