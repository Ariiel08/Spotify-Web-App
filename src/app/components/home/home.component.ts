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
  error: boolean;
  errorMessage: string;

  constructor(private spoti: SpotifyAPIService) {
    this.loading = true;
    this.error = false;

    this.spoti.getNewReleases().subscribe((data:any) => {
      this.newReleases = data;
      this.loading = false;

    }, (errorService) => {
      this.loading = false;
      this.error = true;
      this.errorMessage = errorService.error.error.message;
    });
  }

  ngOnInit(): void {
  }

}
