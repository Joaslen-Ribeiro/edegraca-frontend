import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostsService {



  constructor(
    private http: HttpClient
  ) { }

    token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }
    getAllPostagem(): Observable<Postagem[]>{
    return this.http.get<Postagem[]>('',this.token) 
    }
    PostPostagem(postagem: Postagem): Observable<Postagem>{
        return this.http.post<Postagem>('',postagem, this.token)
    }
  }