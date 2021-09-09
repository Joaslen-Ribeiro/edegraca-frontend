import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { LogarComponent } from './logar/logar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { MeusPostsComponent } from './meus-posts/meus-posts.component';
import { ConfiguracaoComponent } from './configuracao/configuracao.component';
import { SobreComponent } from './sobre/sobre.component';
import { TemaComponent } from './tema/tema.component';
import { NovoTemaComponent } from './novo-tema/novo-tema.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LogarComponent},
  {path: 'cadastrar', component: CadastrarComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'meus-posts', component: MeusPostsComponent},
  {path: 'configuracao', component: ConfiguracaoComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'tema', component: TemaComponent},
  {path: 'novo-tema', component: NovoTemaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }