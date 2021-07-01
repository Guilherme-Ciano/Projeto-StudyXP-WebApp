import { Component, OnInit } from '@angular/core';
import { API_Return } from './../../../model/API';
import { Router } from '@angular/router';
import { SnackbarService } from './../../../services/snackbar.service';

@Component({
  selector: 'app-dashboard-aluno',
  templateUrl: './dashboard-aluno.component.html',
  styleUrls: ['./dashboard-aluno.component.scss']
})
export class DashboardAlunoComponent implements OnInit {

  pagina = {
    home : "aluno/dashboard",
    help : "help",
    config : "aluno/profile/config",
    perfil : "aluno/profile",
    tarefas : "aluno/tarefas",
  }

  user = {
    Nome: localStorage.getItem('Nome'),
    Ano: localStorage.getItem("Ano"),
    RA: localStorage.getItem("RA"),
    Level: localStorage.getItem("LVL"),
  }

  tarefa = {} as API_Return;

  navegacaoOBJ = JSON.stringify(this.pagina);

  constructor(
    private router: Router, 
    private snackbar:SnackbarService
    ) { }

  ngOnInit(): void {
    if (sessionStorage.getItem("logSession") !== null || localStorage.getItem("RA") !== null){
      if ((localStorage.getItem("RA") || localStorage.getItem("Nome") || localStorage.getItem("LVL") || localStorage.getItem("Ano") || localStorage.getItem("Email")) === 'undefined'){
        this.router.navigate(['/'])
        this.snackbar.error('Dados inválidos!')
      }
      this.snackbar.success('Bem-vindo ' + localStorage.getItem("Nome") + '!')
    } else {
      this.router.navigate(['/'])
    }
  }

  navegacao = JSON.parse(this.navegacaoOBJ);

  home = this.navegacao.home;
  help = this.navegacao.help;
  config = this.navegacao.config;
  perfil = this.navegacao.perfil;
  tarefas = this.navegacao.tarefas;

  // public async getTarefas(){
  //   await axios.get("http://localhost:9090/professores/tarefa/index")
  //   .then((data) => {
  //     console.log(data.data);
  //   })
  // }

}
