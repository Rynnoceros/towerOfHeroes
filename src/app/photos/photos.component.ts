import { Component, OnInit } from '@angular/core';
import { Photo } from './photo';
import { PhotosService } from './photos.service';
import { Input } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
  providers: [ PhotosService ]
})
export class PhotosComponent implements OnInit {

  photos: Photo[];
  loading: boolean = true;
  @Input() listePhotos: Photo[];

  constructor(private _photosService: PhotosService) { }

  ngOnInit() : void {
    if (!this.listePhotos)
      this._photosService.getPhotos().then(photos => {
        this.photos = photos; this.loading = false
      });
    else
    {
      this.photos = this.listePhotos;
      this.loading = false;
    }
  }

  showBigImage(photo: Photo) {
    const photoIndex = this.photos.indexOf(photo);
    
    this.photos[photoIndex].displayedPhoto = this.photos[photoIndex].displayedPhoto ? null : this.photos[photoIndex].url
  }
}
