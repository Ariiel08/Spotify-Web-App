import { Component, OnInit } from '@angular/core';
import { SpotifyAPIService } from "../../services/spotify-api.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newReleases: any[] = [];
  loading: boolean;

  constructor(private spoti: SpotifyAPIService) {
    this.loading = true;

    this.spoti.getNewReleases().subscribe((data:any) => {
      console.log(data);
      this.newReleases = data;
      this.loading = false;
    });
  }

  ngOnInit(): void {
  }

}
