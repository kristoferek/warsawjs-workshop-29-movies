import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MoviesService {

  constructor(private http: HttpClient) {}

  async fetchAsyncMovies() {
      const promise = await this.http.get('/assets/movies.json').toPromise();
      return promise;
  }
}
