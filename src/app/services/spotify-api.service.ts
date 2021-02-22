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
      Authorization: 'Bearer BQCMMYql_siOh1ynmT9xL9BwnuveXaLIzZNo3FOtpQ_nC_wuXnyNCmsdFyslraEw5jsfrgiD6y6WWJTlzn8'
    });

    return this.http.get(url, {headers})
  }

  getNewReleases(){

    return this.getQuery('browse/new-releases').pipe(map(data => data['albums'].items));
  }

  getArtists(value: string) {

    return this.getQuery(`search?q=${value}&type=artist&limit=15`).pipe(map(data => data['artists'].items))
  }

  //https://api.spotify.com/v1/artists/{id}

  getArtist(value: string) {

    return this.getQuery(`artists/${value}`);
  }

  getTopTracks(value: string) {

    return this.getQuery(`artists/${value}/top-tracks?country=us`).pipe(map(data => data['tracks']));
  }
}
