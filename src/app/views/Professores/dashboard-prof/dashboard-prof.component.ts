import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import axios from 'axios';
import { CriptografiaService } from 'src/app/services/criptografia.service';
import { SnackbarService} from 'src/app/services/snackbar.service';
import { DialogService } from './../../../services/dialog.service';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-dashboard-prof',
  templateUrl: './dashboard-prof.component.html',
  styleUrls: ['./dashboard-prof.component.scss']
})
export class DashboardProfComponent implements OnInit {

  user = {
    Nome: "",
  }

  tarefas: [];

  constructor(
    private router: Router, 
    private snackbar:SnackbarService,
    private criptoService: CriptografiaService,
    private dialog: DialogService,
    private apiService: ApiServiceService
    ) { }

  ngOnInit(): void {
    // if (sessionStorage.getItem("logSession") !== null){
    //   if ((localStorage.getItem("Raw_Data")) === 'undefined'){
    //     this.router.navigate(['/'])
    //     this.snackbar.error('Dados inválidos!')
    //   }

    //   let rawData = this.criptoService.descriptografar(localStorage.getItem('Raw_Data'), 'md5')
    //   let jsonData = JSON.parse(rawData)
      
    //   this.user = {
    //     Nome: jsonData.nome,
    //   }

    //   this.getTarefas();

    //   this.snackbar.success('Bem-vindo ' + this.user.Nome + '!')
    // } else {
    //   this.router.navigate(['/'])
    // }
  }

  public async getTarefas(){
    await axios.get("http://localhost:9090/professores/tarefas/index")
    .then((data) => {
      this.tarefas = data.data;
    })
  }

  criarTarefa(){
    this.dialog.openDialog()
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
}
