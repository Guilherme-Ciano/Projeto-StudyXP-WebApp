import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { API_Return } from './../../../model/API';

@Component({
  selector: 'app-dashboard-aluno',
  templateUrl: './dashboard-aluno.component.html',
  styleUrls: ['./dashboard-aluno.component.scss']
})
export class DashboardAlunoComponent implements OnInit {

  user = {
    Nome: localStorage.getItem('Nome'),
    Ano: localStorage.getItem("Ano"),
    RA: localStorage.getItem("RA"),
  }

  tarefa = {} as API_Return;

  constructor() { }

  ngOnInit(): void {
    // this.getTarefas()
  }

  // public async getTarefas(){
  //   await axios.get("http://localhost:9090/professores/tarefa/index")
  //   .then((data) => {
  //     console.log(data.data);
  //   })
  // }

}
