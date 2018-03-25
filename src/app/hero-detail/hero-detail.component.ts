import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  public isAdd: boolean;
  private id: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    if (+this.route.snapshot.paramMap.get('id') > 0) {
      this.getHero();
      this.isAdd = false;
    } else {
      this.hero = new Hero();
      this.isAdd = true;
    }
  }

  getHero(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(this.id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.addHero(this.hero.name)
      .subscribe(newHero => {
      this.id = newHero.id;
      });
    this.isAdd = false;

    this.router.navigateByUrl('/detail/' + this.id);
  }
}
