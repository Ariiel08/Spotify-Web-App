import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SpotifyAPIService } from 'src/app/services/spotify-api.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: [
  ]
})
export class ArtistComponent implements OnInit {

  artist: any = {};
  tracks: any[] = [];
  loading: boolean;

  constructor(private router: ActivatedRoute, private spoti: SpotifyAPIService) { 
    this.loading = true;
    this.router.params.subscribe(params => {
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  ngOnInit(): void {
  }

  getArtist(id: string){
    this.loading = true;
    this.spoti.getArtist(id).subscribe(artist => {
      this.artist = artist;
      
    });
    this.loading = false
  }

  getTopTracks(id: string){
    this.spoti.getTopTracks(id).subscribe(tracks => {
      this.tracks = tracks;
      console.log(tracks);
      
    });
  }

}
