import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit  {
  constructor(private heroService: HeroService) {
  };

  ngOnInit(): void {
    this.getHeroes();
  };

  name = 'Angular';
  selectedHero: Hero;
  heroes: Hero[];

  onSelect(hero: Hero):void {
    this.selectedHero = hero;
  };

  getHeroes(): void {
    this.heroService.getHeroes().then((heroes) => {
      this.heroes = heroes;
    });
  };

  gotoDetail(): void {
    debugger
  };
}
