import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Hero } from './hero';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {
  
  private heroesUrl = 'api/heroes';
  private headers = new Headers({'Content-Type': 'application/json'});
  private currentHeroes:Hero[];

  constructor(private http: Http) { }

  getHeroes(): Promise<Hero[]> {
    //return Promise.resolve(HEROES);
    return this.http.get(this.heroesUrl)
                    .toPromise()
                    .then(response => response.json().data as Hero[])
                    .catch(this.errorHandled);
  }

  // getHeroesWithDelay(delay:number): Promise<Hero[]> {
  //   return new Promise(resolve => {
  //     setTimeout(() => resolve(HEROES), delay);
  //   })
  // }

  getHeroDetail(id:number): Promise<Hero> {
    // return new Promise(resolve => {
      
    //   this.getHeroes().then(heroes => heroes.forEach(hero => {
    //     if (hero.id === id)
    //     {
    //       resolve(hero);
    //     }
    //   }))
    // })
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Hero)
      .catch(this.errorHandled);
  }

  updateHero(hero: Hero): Promise<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;

    return this.http
        .put(url, JSON.stringify(hero), {headers: this.headers})
        .toPromise()
        .then(() => hero)
        .catch(this.errorHandled);
  } 

  addHero(heroName: string): Promise<Hero> {
    return this.http
               .post(this.heroesUrl, JSON.stringify({name:heroName}), {headers: this.headers})
               .toPromise()
               .then(res => res.json().data as Hero)
               .catch(this.errorHandled);
  }

  deleteHero(hero: Hero): Promise<Hero> {
    const url = `${this.heroesUrl}/${hero.id}` 
    return  this.http
                .delete(url, {headers : this.headers})
                .toPromise()
                .then(() => null)
                .catch(this.errorHandled)
  }

  private errorHandled(error : any) {
    console.error('error : ', error);
    return Promise.reject(error.message || error);
  }
}
