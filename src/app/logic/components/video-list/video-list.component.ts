import { Component, OnInit, Input } from '@angular/core';
import { Movies } from '../../interfaces/movies.interface';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
    @Input() movies: Movies = [];

    constructor() { }

    ngOnInit() {
    }
}
