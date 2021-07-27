import { Component, OnInit } from '@angular/core';
import { LogoutService } from 'src/app/services/logout.service';

@Component({
  selector: 'app-config-alunos',
  templateUrl: './config-alunos.component.html',
  styleUrls: ['./config-alunos.component.scss']
})
export class ConfigAlunosComponent implements OnInit {

  constructor(
    private sair: LogoutService
  ) { }

  ngOnInit(): void {
  }

  logout(){
    this.sair.logout()
  }

}
