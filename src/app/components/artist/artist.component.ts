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
  loading: boolean;

  constructor(private router: ActivatedRoute, private spoti: SpotifyAPIService) { 
    this.loading = true;
    this.router.params.subscribe(params => {
      this.getArtist(params['id']);
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

}
