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
  loading: boolean;

  constructor(private spoti: SpotifyAPIService) {
    
   }

  ngOnInit(): void {
  }

  search(value: string){
    
    if(value.length > 0){
      this.loading = true;
    }
    
    this.spoti.getArtists(value).subscribe((data:any) => {
      console.log(data);
      this.artists = data;
      this.loading = false;
    });
  }
}
