import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyAPIService {

  constructor(private http: HttpClient) { 
  }

  getNewReleases(){
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQAZxQ9pSxT8I_CIAiBG-vMS_mBhu6VeMcziSenD1oUYK1LinYeTRPKWHloIzdP2966rYM-zEC3fD5qcTb7iaFzM_00gGK7ms0dO7IDy_uMnSuBStDhJCBVtXZ9l6x-QJHuRTK_lxwfZ-w'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});
  }
}
