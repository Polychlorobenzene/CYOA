import { Component } from '@angular/core';
import { HeroService } from './services/hero.service';
// import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
// import 'rxjs/add/operator/map';
// import { Observable } from '@firebase/util';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';

  // heroesCollection: AngularFirestoreCollection<Hero>;
  // heroesFS: Observable<Hero[]>;

  constructor(
    private heroService: HeroService
    // private afs: AngularFirestore
  ) { }

  // ngOnInit() {
  //   this.heroesCollection = this.afs.collection('heroes');
  //   this.heroesFS = this.heroesCollection.valueChanges();
  // }
}
