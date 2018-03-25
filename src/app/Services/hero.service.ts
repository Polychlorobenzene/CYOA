import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { MessageService } from './message.service';
import { HeroesComponent } from '../heroes/heroes.component';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import 'rxjs/add/operator/map';
// import { Observable } from '@firebase/util';

// interface Hero {
//   id: number;
//   name: string;

// }

@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    // Todo: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    // Todo: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

  addHero(heroName: string): Observable<Hero> {
    const hero = new Hero({ name: heroName });
    hero.id = Math.max.apply(Math, HEROES.map(function (m) { return m.id + 1; }));
    HEROES.push(hero);
    this.messageService.add(`HeroService: added hero id=${hero.id}`);
    return of(hero);
  }
}
