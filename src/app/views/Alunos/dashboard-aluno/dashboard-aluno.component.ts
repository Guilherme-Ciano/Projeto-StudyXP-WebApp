import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { API_Return } from './../../../model/API';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (sessionStorage.getItem("logSession") !== null || localStorage.getItem("RA") !== null){
      if (sessionStorage.getItem("logSession") === localStorage.getItem("RA")){
          sessionStorage.setItem("Navegacao", this.navegacaoOBJ);
        // this.getTarefas()
      } else {
        this.router.navigate(['/'])
      }
    } else {this.router.navigate(['/'])}
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
