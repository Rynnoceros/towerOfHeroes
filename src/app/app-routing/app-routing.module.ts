import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent} from '../heroes/heroes.component';
import { HeroDetailComponent } from '../hero/detail/hero-detail.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { PhotosComponent } from '../photos/photos.component';
import { AlbumsComponent } from '../albums/albums.component';

const ROUTES : Routes = [
  { path:'heroes', component: HeroesComponent },
  {     path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'details/:id',
    component: HeroDetailComponent
  },
  {
    path: 'photos',
    component: PhotosComponent
  },
  {
    path: 'albums',
    component: AlbumsComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES) 
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
