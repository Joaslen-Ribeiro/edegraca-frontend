import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  cadastrar(usuario: Usuario): Observable<Usuario>{
    return this.http.post <Usuario>(
      'https://edegraca.herokuapp.com/usuarios/cadastrar', usuario
    )
  }

  logar(userlogin: UserLogin): Observable<UserLogin> {
    return this.http.post<UserLogin>(
      'https://edegraca.herokuapp.com/usuarios/logar', userlogin
    )
  }

  
logado(){
  let ok = false
  
  if(environment.token != ''){
    ok = true
  }

  return ok
}
deslogado(){
  let ok = false
  if(environment.token == ''){
    ok = true
  }
  return ok
}

}
