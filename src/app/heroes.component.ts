import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit  {
  constructor(
    private heroService: HeroService,
    private router: Router
  ) {};
  
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

  add(name: string): void {
    if (name && name.trim()) {
      this.heroService.create(name).then((hero) => {
        this.heroes.push(hero);
      });
    }
  }

  delete(id: number): void {
     this.heroService.delete(id).then(() => {
       this.heroes = this.heroes.filter(hero => hero.id !== id);
     });
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  };
}
