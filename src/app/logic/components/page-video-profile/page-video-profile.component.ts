import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../movies.service';
import { Movie } from '../../interfaces/movie.interface';

@Component({
  selector: 'app-page-video-profile',
  templateUrl: './page-video-profile.component.html',
  styleUrls: ['./page-video-profile.component.css']
})
export class PageVideoProfileComponent implements OnInit {
    public movie: Movie = null;

    constructor(
        private route: ActivatedRoute,
        private moviesProvider: MoviesService
    ) { }

    ngOnInit() {
        const id = this.route.snapshot.params.id;
        this.movie = this.moviesProvider.fetchMovie(id);
    }
}
