import { Component, OnInit } from '@angular/core';
import { SpotifyAPIService } from "../../services/spotify-api.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newReleases: any[] = [];

  constructor(private spoti: SpotifyAPIService) {
    this.spoti.getNewReleases().subscribe((data:any) => {
      console.log(data);
      this.newReleases = data;
    });
  }

  ngOnInit(): void {
  }

}
