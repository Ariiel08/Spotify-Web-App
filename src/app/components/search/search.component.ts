import { Component, OnInit } from '@angular/core';
import { SpotifyAPIService } from "../../services/spotify-api.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  artists: any[] = [];

  constructor(private spoti: SpotifyAPIService) { }

  ngOnInit(): void {
  }

  search(value: string){
    console.log(value);
    this.spoti.getArtists(value).subscribe((data:any) => {
      console.log(data);
      this.artists = data;
    });
  }
}
