import { Component, OnInit } from '@angular/core';
import { LogoutService } from 'src/app/services/logout.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { CriptografiaService } from './../../../services/criptografia.service';

@Component({
  selector: 'app-config-alunos',
  templateUrl: './config-alunos.component.html',
  styleUrls: ['./config-alunos.component.scss']
})
export class ConfigAlunosComponent implements OnInit {
  formAlteracaoNome: FormGroup;
  formAlteracaoEmail: FormGroup;
  formAlteracaoSenha: FormGroup;
  formAlteracaoPhone: FormGroup;

  constructor(
    private fb: FormBuilder,
    private sair: LogoutService,
    private apiService: ApiServiceService,
    private criptoService: CriptografiaService,
  ) { }

  rawData = this.criptoService.descriptografar(localStorage.getItem('Raw_Data'), 'md5')
  jsonData = JSON.parse(this.rawData)
  
  user = {
    Nome: this.jsonData.nome,
    Email: this.jsonData.email,
    Pass: this.jsonData.password,
    Phone: this.jsonData.phone,
    ID: this.jsonData.id,
  }

  ngOnInit(): void {
    this.formAlteracaoNome = this.fb.group({
      nome: ["", [Validators.required]],
    })

    this.formAlteracaoEmail = this.fb.group({
      email: ["", [Validators.required]],
    })

    this.formAlteracaoSenha = this.fb.group({
      password: ["", [Validators.required]],
    })

    this.formAlteracaoPhone = this.fb.group({
      phone: ["", [Validators.required]],
    })
  }

  logout(){
    this.sair.logout()
  }

  async AlterarDadosDoAluno(newData){
    this.apiService.AlterarDadosAluno(this.user.ID, newData)
  }

}
