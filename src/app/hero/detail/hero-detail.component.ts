import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { HeroService }              from '../../hero/hero.service';
import { Hero }                     from '../hero';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero : Hero;
  
  constructor(private _heroService: HeroService, private route: ActivatedRoute, 
              private location: Location) { }

  ngOnInit(): void  {
    this.route.params
      .switchMap((params: Params) => this._heroService.getHeroDetail(+params['id']))
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  saveHero(): void {
    this._heroService.updateHero(this.hero).then(() => this.goBack());
  }
}
