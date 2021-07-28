import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import axios from 'axios';
import { CriptografiaService } from 'src/app/services/criptografia.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  disableSelect = new FormControl(false);
  formCadastroAluno: FormGroup;
  formCadastroProfessor: FormGroup;
  level : number = 0; 
  option = "1";
  optionGroup = "formCadastroAluno";

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private criptoService: CriptografiaService,
  ) { }

  ngOnInit(): void {
    this.formCadastroAluno = this.fb.group({
      Nome: ["", [Validators.required]],
      RA: ["", [Validators.required]],
      Phone: ["", [Validators.required]],
      Email: ["", [Validators.required, Validators.email]],
      Password: ["", [Validators.required]],
      Grade: ["", [Validators.required]],
      Level: this.level
    })

    this.formCadastroProfessor = this.fb.group({
      nome: ["", [Validators.required]],
      phone: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]],
      codEscola: ["", [Validators.required]],
    })
  }

  changeCadastro(){
    console.log(this.option);
    if (this.option === "1"){
      document.getElementById("COD").style.display = "none";
      document.getElementById("RA").style.display = "block";
      document.getElementById("ANO").style.display = "block";
      this.optionGroup = "formCadastroAluno";
    } else {
      document.getElementById("RA").style.display = "none";
      document.getElementById("ANO").style.display = "none";
      document.getElementById("COD").style.display = "block";
      this.optionGroup = "formCadastroProfessor";
    }
  }

  async fazerCadastro(){
    if (this.option === "1"){
      const aluno = {
        nome: this.formCadastroAluno.value.Nome,
        email: this.formCadastroAluno.value.Email,
        password: this.criptoService.criptografarSenhas((this.formCadastroAluno.value.Password)),
        phone: this.formCadastroAluno.value.Phone,
        ra: this.formCadastroAluno.value.RA,
        grade: Number(this.formCadastroAluno.value.Grade),
        level: this.formCadastroAluno.value.Level,
      }
      
      await axios.post("http://localhost:9090/alunos/create", aluno)
      this.router.navigate(['/'])
    }

    else{
      const professor = {
        nome: this.formCadastroProfessor.value.nome,
        email: this.formCadastroProfessor.value.email,
        password: this.criptoService.criptografarSenhas((this.formCadastroProfessor.value.password)),
        phone: this.formCadastroProfessor.value.phone,
        codEscola: this.formCadastroProfessor.value.codEscola,
      }
      await axios.post("http://localhost:9090/professores/create", professor)
      this.router.navigate(['/'])
    }
  }
}
