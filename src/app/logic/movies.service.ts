import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class MoviesService {

  constructor(private http: HttpClient) {}

  async fetchAsyncMovies() {
      const promise = await this.http.get(environment.moviesUrl).toPromise();
      return promise;
  }
}
