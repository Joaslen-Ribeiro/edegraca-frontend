import { Component, OnInit } from '@angular/core';
import { Postagem } from '../model/Postagem';

@Component({
  selector: 'app-modal-post',
  templateUrl: './modal-post.component.html',
  styleUrls: ['./modal-post.component.css']
})
export class ModalPostComponent implements OnInit {

  postagem: Postagem = new Postagem()

  constructor() { }

  ngOnInit() {
  }

}
