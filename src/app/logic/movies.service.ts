import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Movies } from './interfaces/movies.interface';

@Injectable()
export class MoviesService {

  constructor(private http: HttpClient) {}

  async fetchAsyncMovies() {
      const promise = await this.http.get<Movies>(environment.moviesUrl).toPromise();
      return promise;
  }

  async fetchMovie(movieId) {
      const list = await this.fetchAsyncMovies();
      const movie = list.find(m => m.id === movieId);
      return movie;
  }

  async filterMovies(term) {
      const list = await this.fetchAsyncMovies();
      const movies = list.filter(m => Object.values(m).find(v => v.includes(term)));
      return movies;
  }
}
