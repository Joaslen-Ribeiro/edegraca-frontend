import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from '../model/UserLogin';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  logar(userlogin: UserLogin): Observable<UserLogin> {
    return this.http.post<UserLogin>(
      'https://edegracanubia.herokuapp.com/usuario/logar', userlogin
    )
  }

  cadastrar(usuario: Usuario): Observable<Usuario>{
    return this.http.post <Usuario>(
      'https://edegracanubia.herokuapp.com/usuario/cadastrar', usuario
    )
  }

}
