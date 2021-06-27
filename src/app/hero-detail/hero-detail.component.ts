import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
<<<<<<< HEAD
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService }  from '../hero.service';
=======
>>>>>>> d0545ca40851bcd2d9c391d3f972c2496b03fe40

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
<<<<<<< HEAD
  hero: Hero;
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }
  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }
=======
  @Input() hero: Hero;

  constructor() { }
  ngOnInit() {
  }

>>>>>>> d0545ca40851bcd2d9c391d3f972c2496b03fe40
}
