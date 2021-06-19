import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-config-alunos',
  templateUrl: './config-alunos.component.html',
  styleUrls: ['./config-alunos.component.scss']
})
export class ConfigAlunosComponent implements OnInit {
  nome = localStorage.getItem("Nome");
  email = localStorage.getItem("Email");

  constructor() { }

  ngOnInit(): void {
  }

}
