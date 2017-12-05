import { Component, OnInit } from '@angular/core';
import { Album } from './album';
import { PhotosService } from '../photos/photos.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
  providers: [PhotosService]
})

export class AlbumsComponent implements OnInit {

  albums:Album[] = [];
  private iCurrentAlbum = 0;
  currentAlbum:Album;
  albumSelected:Album;

  colors = [
    {color:'AliceBlue'},
    {color:'AntiqueWhite'},
    {color:'Aqua'},
    {color:'Blue'},
    {color:'BlueViolet'},
    {color:'Brown '},
    {color:'CadetBlue'},
    {color:'Chartreuse'},
    {color:'Chocolate'},
    {color:'Coral'},
    {color:'Crimson'},
    {color:'DarkBlue'},
    {color:'DarkCyan'},
    {color:'DarkGoldenRod'},
    {color:'DarkGreen'},
    {color:'DarkOliveGreen'},
  ]

  constructor(private _photoService: PhotosService) { }

  ngOnInit() : void {
    this.filterByAlbum();
    this.albumSelected = null;
  }

  filterByAlbum() {
    this._photoService.getPhotos().then(photos => {
      photos.forEach(photo => {
        if (this.iCurrentAlbum !== photo.albumId)
        {
          if (this.currentAlbum)
          {
            this.albums.push(this.currentAlbum);
          }
          this.currentAlbum = {id:photo.albumId, listePhotos: [photo]};
          this.iCurrentAlbum = photo.albumId;
        }
        else
        {
          this.currentAlbum.listePhotos.push(photo);
        }
      })
      this.albums.push(this.currentAlbum);
    })
  }

  getColorByAlbumId(id:number) : string {
    return this.colors[id % this.colors.length].color;
  }

  displayPhotos(album:Album) : void {
    this.albumSelected = album;
  }

  retourAlbums() : void {
    this.albumSelected = null;
  }
}

