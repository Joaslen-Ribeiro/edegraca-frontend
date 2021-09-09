import { Component, OnInit } from '@angular/core';
import { PostsService } from '../service/posts.service';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  constructor(
    private postService: PostsService
  ) { }

  ngOnInit() {
  }

}
