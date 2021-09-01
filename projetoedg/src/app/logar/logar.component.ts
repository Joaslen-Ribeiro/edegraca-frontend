import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-logar',
  templateUrl: './logar.component.html',
  styleUrls: ['./logar.component.css']
})
export class LogarComponent implements OnInit {

  usuarioLogin: UserLogin = new UserLogin
  constructor(
    private authService : AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }
  logar(){
    this.authService.logar(this.usuarioLogin).subscribe((resp:UserLogin)=> {
      this.usuarioLogin = resp

      environment.token = this.usuarioLogin.token
      environment.nome = this.usuarioLogin.nome
      environment.email = this.usuarioLogin.email
      environment.empresa = this.usuarioLogin.empresa
      environment.id = this.usuarioLogin.id
      environment.senha = this.usuarioLogin.senha
   
      this.router.navigate(['/inicio']) 
    }, erro => {
      if(erro.status == 500){
        alert('senha ou email incorretos!')
      }
    })
  }

}
