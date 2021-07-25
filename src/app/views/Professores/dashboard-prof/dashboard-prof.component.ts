import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import { CriptografiaService } from 'src/app/services/criptografia.service';
import { SnackbarService} from 'src/app/services/snackbar.service';

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
    private criptoService: CriptografiaService
  ) { }

  ngOnInit(): void {
    if (sessionStorage.getItem("logSession") !== null){
      if ((localStorage.getItem("Raw_Data")) === 'undefined'){
        this.router.navigate(['/'])
        this.snackbar.error('Dados inválidos!')
      }

      let rawData = this.criptoService.descriptografar(localStorage.getItem('Raw_Data'), 'md5')
      let jsonData = JSON.parse(rawData)
      
      this.user = {
        Nome: jsonData.nome,
      }

      this.getTarefas();

      this.snackbar.success('Bem-vindo ' + this.user.Nome + '!')
    } else {
      this.router.navigate(['/'])
    }
  }

  public async getTarefas(){
    await axios.get("http://localhost:9090/professores/tarefas/index")
    .then((data) => {
      this.tarefas = data.data;
    })
  }
}
