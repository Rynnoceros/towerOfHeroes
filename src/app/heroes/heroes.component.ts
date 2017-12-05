import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero/hero'
import { HeroService } from '../hero/hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})

export class HeroesComponent implements OnInit  { 

  constructor (private _heroService: HeroService, private router: Router) {}

  selectedHero: Hero;
  heroes: Hero [];
  hero: Hero;

  ngOnInit() : void {
    //this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    this.selectedHero;
    this.hero = this.selectedHero;
  }

  onClick(hero: Hero): void {
    this.selectedHero = hero;
  }

  showDetail(): void {
    //this.router.navigate(['/details', this.selectedHero.id]);
    this.router.navigateByUrl('/details/' + this.selectedHero.id);
  }

  addHero(heroName: string): void {
    if (heroName.trim() === '') return;
    this._heroService.addHero(heroName).then(hero => {
      this.heroes.push(hero);
      this.selectedHero = hero;
    });
  }

  deleteHero(hero: Hero): void {
    this._heroService.deleteHero(hero).then(() => {
      //this.heroes.splice(this.heroes.indexOf(hero),1);
      this.selectedHero = null;
      this._heroService.getHeroes().then(heroes => this.heroes = heroes)
    })
  }
}
