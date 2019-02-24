import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../movies.service';

import { Movies } from '../../interfaces/movies.interface';
import { Movie } from '../../interfaces/movie.interface';

@Component({
  selector: 'app-page-video-list',
  templateUrl: './page-video-list.component.html',
  styleUrls: ['./page-video-list.component.css']
})


export class PageVideoListComponent implements OnInit {
    public movies: Movies = [];

    constructor(
        private moviesProvider: MoviesService
    ) { }

    async getMovies() {
        this.movies = await this.moviesProvider.fetchAsyncMovies();
    }

    async ngOnInit() {
    }
}
