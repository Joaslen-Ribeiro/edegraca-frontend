import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-menu2',
  templateUrl: './menu2.component.html',
  styleUrls: ['./menu2.component.css']
})
export class Menu2Component implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(){}
  

    sair(){
      this.router.navigate(['/login'])
      environment.token=''
      environment.email=''
      environment.empresa=false
      environment.nome=''
      environment.senha=''
      environment.id=0
      

    }
 
}