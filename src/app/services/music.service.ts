import { Injectable } from '@angular/core';
import * as dataArtists from "./artists.json";
@Injectable({
  providedIn: 'root'
})
export class MusicService {

  header = {'Access-Control-Request-Headers': '*'};
  //, 'Authorization': 'Bearer BQDA-F7a3y7sSrmsdiYoJ53eaYtQl8qNKLownB0yIa452PkThAwphVzCppjuVbZ4v_Km4ERCtmAmgTnJPaNRTHFFa-1Uw0FTLOWsr8pnAuraQKOcmjdW7Yfhju0P-1sldakd6-j__Sl12yRgYcFN50y3ys8VifxzuujIkHpYr8cq5G5q'
  url_server = "https://music-back-seminario.herokuapp.com/";

  constructor() { }

  getArtists() {
    
    return fetch(`${this.url_server}artists`, { mode: 'cors' , headers: this.header}).then(
      (response) => response.json()
    );
  }
  getArtistsFromJson() {
    return dataArtists;
  }

  getAlbums() {
    
    return fetch(`${this.url_server}albums`, { mode: 'cors' , headers: this.header} ).then(
      (albums) => albums.json()
    );
  }

  getArtistTracks(artist_id) {
    
    return fetch(`${this.url_server}tracks/artist/${artist_id}`, { mode: 'cors' , headers: this.header} ).then(
      (albums) => albums.json()
    );
  }
  getAlbumsTracks(album_id) {
    return fetch(`${this.url_server}tracks/album/${album_id}`, { mode: 'cors' , headers: this.header} ).then(
      (albums) => albums.json()
    );
  }

}