import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Photo } from './photo';

@Injectable()
export class PhotosService {

  private photoUrl = "https://jsonplaceholder.typicode.com/photos";
  private headers = new Headers ({'Content-Type' : 'application/json'});

  constructor(private _http: Http) { }

  getPhotos(): Promise<Photo[]> {
    return this._http
               .get(this.photoUrl, {headers: this.headers})
               .toPromise()
               .then(response => response.json() as Photo[])
               .catch(this.errorHandler);
  }

  errorHandler(error: any) {
    console.error('error : ', error.message);
    return Promise.reject(error.message || error); 
  }
}
