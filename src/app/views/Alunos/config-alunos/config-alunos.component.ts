import { Component, OnInit } from '@angular/core';
import { LogoutService } from 'src/app/services/logout.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-config-alunos',
  templateUrl: './config-alunos.component.html',
  styleUrls: ['./config-alunos.component.scss']
})
export class ConfigAlunosComponent implements OnInit {
  formAlteracaoAluno: FormGroup

  constructor(
    private fb: FormBuilder,
    private sair: LogoutService,
    private apiService: ApiServiceService,
  ) { }

  ngOnInit(): void {
    this.formAlteracaoAluno = this.fb.group({
      Nome: [""],
      Phone: [""],
      Email: ["", [Validators.email]],
      Password: [""],
    })
  }

  logout(){
    this.sair.logout()
  }

  async AlterarDadosDoAluno(){
    let dadosAlterados = (this.formAlteracaoAluno) // Obj
    let dadosNovos = {}
    let dadosOriginais = await (this.apiService.BuscarAluno()) // Obj

    let keys = ['Nome', 'Phone', 'Email', 'Password']

    Object.keys(dadosAlterados.value).forEach((item) => {
      console.log(item)
      if (item === null || "") {
        dadosAlterados.removeControl(item);
      } else {
        
      }
    })
    

    console.log(dadosAlterados)

  }

}
