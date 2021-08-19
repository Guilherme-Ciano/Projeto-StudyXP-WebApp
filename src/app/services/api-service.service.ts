import { Injectable } from '@angular/core';
import axios from 'axios';
import { CriptografiaService } from 'src/app/services/criptografia.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  professores = []
  alunos = []

  user_Aluno = {
    Nome: '',
    Ano: '',
    Level: '',
    RA: ''
  }

  user_Prof = {
    Nome: '',
    Email: '',
  }

  constructor(
    private criptoService: CriptografiaService,
    private router: Router,
    private location: Location,
    private snbar: SnackbarService
  ) { }

  async BuscarAluno() {
    await axios.get("http://localhost:9090/alunos/index").then((response) => {
      this.alunos =  response.data
    })

    let rawData = this.criptoService.descriptografar(localStorage.getItem('Raw_Data'), 'md5')
    let jsonData = JSON.parse(rawData)
      
    this.user_Aluno = {
      Nome: jsonData.nome,
      Ano: jsonData.grade,
      Level: jsonData.level,
      RA: jsonData.ra,
    }

    let aluno = this.alunos.find(element => element.ra === this.user_Aluno.RA )
    return (aluno)
  }

  async BuscarProf() {
    await axios.get("http://localhost:9090/professores/index").then((response) => {
      this.professores =  response.data
    })

    let rawData = this.criptoService.descriptografar(localStorage.getItem('Raw_Data'), 'md5')
    let jsonData = JSON.parse(rawData)
      
    this.user_Prof = {
      Nome: jsonData.nome,
      Email: jsonData.email,
    }

    let prof = this.professores.find(element => element.email === this.user_Prof.Email && element.nome === this.user_Prof.Nome)
    return (prof)
  }

  refresh(): void {
    this.router.navigateByUrl("/refresh", { skipLocationChange: true }).then(() => {
      this.router.navigate([decodeURI(this.location.path())]);
    })
  }

  async BuscarTarefas(){
    await axios.get('http://localhost:9090/alunos/tarefas/tarefaspendentes').then((response) => {
      return response;
    })
  }

  async EnviarTarefa(id: number){
    let concluir = {
      flag: "concluido"
    };
    await axios.post('http://localhost:9090/alunos/tarefas/concluirtarefa?id=' + id, concluir).then((response) => {
      this.snbar.success(response.data.status, response.data.message);
      this.refresh()
    })
  }

  async AlterarDadosAluno(id: number, newData){
    await axios.post('http://localhost:9090/alunos/update?id=' + id, newData).then((response) => {
      this.snbar.success(response.data.status, response.data.message);
      this.refresh()
    })
  }
}
