import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeroesComponent }  from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero/detail/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroService } from './hero/hero.service';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './data/in-memory-data.service';
import { PhotosComponent } from './photos/photos.component';
import { AlbumsComponent } from './albums/albums.component';


@NgModule({
  imports:      [ BrowserModule, 
                  FormsModule,
                  HttpModule,
                  InMemoryWebApiModule.forRoot(InMemoryDataService, {passThruUnknownUrl:true}),
                  AppRoutingModule],
  declarations: [ HeroesComponent, HeroDetailComponent, DashboardComponent, AppComponent, PhotosComponent, AlbumsComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ HeroService ],
})

export class AppModule { }
