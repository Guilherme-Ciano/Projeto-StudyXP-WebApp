import { Component, OnInit } from '@angular/core';
import { LogoutService } from './../../services/logout.service';
import { ApiServiceService } from 'src/app/services/api-service.service';
import axios from 'axios';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  alunos = []
  professores = []
  tarefas = []

  constructor(
    private sair: LogoutService,
    private apiService: ApiServiceService,
    private snackbar: SnackbarService,
  ) { }

  ngOnInit(): void {
    this.getAlunos()
    this.getTarefas()
    this.getProfessores() 
  }

  logout(){
    this.sair.logout()
  }

  //* Alunos
    async getAlunos () {
      await axios.get("http://localhost:9090/alunos/index").then((response) => {
        this.alunos = response.data
      })
    }

    async limparAlunos(){
      await axios.get("http://localhost:9090/alunos/clearall")
      .then((resposta) => {
        this.snackbar.success(resposta.data.status + "! \n" + resposta.data.message + '!')
        this.apiService.refresh();
      })
    }

    async apagarAluno(id: number){
      let apagarAluno = {
        'id': id 
      }
  
      await axios.post("http://localhost:9090/professores/tarefas/clearunique", apagarAluno)
      .then((resposta) => {
        this.snackbar.success(resposta.data.status + "! \n" + resposta.data.message + '!')
        this.apiService.refresh()
      })
    }

  //* Tarefas
    async getTarefas() {
      await axios.get("http://localhost:9090/alunos/tarefas/index").then((response) => {
        this.tarefas = response.data
      })
    }

    async limparTarefas(){
      await axios.get("http://localhost:9090/professores/tarefas/clearall")
      .then((resposta) => {
        this.snackbar.success(resposta.data.status + "! \n" + resposta.data.message + '!')
        this.apiService.refresh()
      })
    }

    async apagarTarefa(id: number){
      let apagarTarefa = {
        'id': id 
      }
  
      await axios.post("http://localhost:9090/professores/tarefas/clearunique", apagarTarefa)
      .then((resposta) => {
        this.snackbar.success(resposta.data.status + "! \n" + resposta.data.message + '!')
        this.apiService.refresh()
      })
    }

  //* Professores
    async getProfessores() {
      await axios.get("http://localhost:9090/professores/index").then((response) => {
        this.professores = response.data
      })
    }

    async limparProfs(){
      await axios.get("http://localhost:9090/professores/clearall")
      .then((resposta) => {
        this.snackbar.success(resposta.data.status + "! \n" + resposta.data.message + '!')
        this.apiService.refresh()
      })
    }

}
