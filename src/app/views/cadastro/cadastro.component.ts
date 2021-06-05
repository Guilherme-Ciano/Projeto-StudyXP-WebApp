import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  disableSelect = new FormControl(false);
  formCadastroAluno: FormGroup;
  formCadastroProfessor: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.formCadastroAluno = this.fb.group({
      Nome: ["", [Validators.required]],
      RA: ["", [Validators.required]],
      Phone: ["", [Validators.required]],
      Email: ["", [Validators.required, Validators.email]],
      Password: ["", [Validators.required]],
      Grade: ["", [Validators.required]],
    })

    this.formCadastroProfessor = this.fb.group({
      nome: ["", [Validators.required]],
      phone: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]],
      codEscola: ["", [Validators.required]],
    })
  }

  async fazerCadastroAluno(){
    const aluno = {
      nome: this.formCadastroAluno.value.Nome,
      email: this.formCadastroAluno.value.Email,
      password: this.formCadastroAluno.value.Password,
      phone: this.formCadastroAluno.value.Phone,
      ra: this.formCadastroAluno.value.RA,
      grade: Number(this.formCadastroAluno.value.Grade),
    }
    await axios.post("http://localhost:9090/alunos/create", aluno)
    this.router.navigate(['/'])
  }

  async fazerCadastroProfessor(){
    const professor = {
      nome: this.formCadastroAluno.value.Nome,
      email: this.formCadastroAluno.value.Email,
      password: this.formCadastroAluno.value.Password,
      phone: this.formCadastroAluno.value.Phone,
      codEscola: this.formCadastroAluno.value.RA,
    }
    await axios.post("http://localhost:9090/professores/create", professor)
    this.router.navigate(['/'])
  }

}
