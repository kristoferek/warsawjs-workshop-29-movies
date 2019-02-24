import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../movies.service';

@Component({
  selector: 'app-page-video-list',
  templateUrl: './page-video-list.component.html',
  styleUrls: ['./page-video-list.component.css']
})
export class PageVideoListComponent implements OnInit {

  constructor(
      private movies: MoviesService
  ) { }

  async getMovies() {
      const response = await this.movies.fetchAsyncMovies();
      console.log(response);
  }

  ngOnInit() {
  }

}
