import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../logic/movies.service';
import { Movies } from '../logic/interfaces/movies.interface';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent implements OnInit {
    public favoriteMovies: Movies = [];

    constructor(
        private moviesProvider: MoviesService
    ) { }

    async ngOnInit() {
        this.favoriteMovies = await this.moviesProvider.filterMovies('rambo');
    }
}
