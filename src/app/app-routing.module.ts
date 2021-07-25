import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigAlunosComponent } from './views/Alunos/config-alunos/config-alunos.component';
import { DashboardAlunoComponent } from './views/Alunos/dashboard-aluno/dashboard-aluno.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { HomeComponent } from './views/home/home.component';
import { ConfigProfComponent } from './views/Professores/config-prof/config-prof.component';
import { CriarTarefaComponent } from './views/Professores/criar-tarefa/criar-tarefa.component';
import { DashboardProfComponent } from './views/Professores/dashboard-prof/dashboard-prof.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cadastro', component:  CadastroComponent},

  { path: 'aluno/dashboard', component:  DashboardAlunoComponent},
  { path: 'aluno/config', component:  ConfigAlunosComponent},
  
  { path: 'prof/dashboard', component:  DashboardProfComponent},
  { path: 'prof/config', component:  ConfigProfComponent},

  {path: 'tarefas', component: CriarTarefaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
