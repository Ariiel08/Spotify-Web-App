import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyAPIService {

  constructor(private http: HttpClient) {}

  getQuery(query: string){
    const url = `https://api.spotify.com/v1/${query}`

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQB1nufJBra-5VIu3B0jVfrtX3CABLGntfPXbufJM277heNqy4FCv49X0FubrPGfmlSeBmMqWR8j5A8iOgo'
    });

    return this.http.get(url, {headers})
  }

  getNewReleases(){

    return this.getQuery('browse/new-releases').pipe(map(data => data['albums'].items));
  }

  getArtists(value: string) {

    return this.getQuery(`search?q=${value}&type=artist&limit=15`).pipe(map(data => data['artists'].items))
  }
}
