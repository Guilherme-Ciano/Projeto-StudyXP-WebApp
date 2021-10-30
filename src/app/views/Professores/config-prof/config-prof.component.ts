import { Component, OnInit } from '@angular/core';
import { LogoutService } from 'src/app/services/logout.service';
import { CriptografiaService } from './../../../services/criptografia.service';

@Component({
  selector: 'app-config-prof',
  templateUrl: './config-prof.component.html',
  styleUrls: ['./config-prof.component.scss']
})
export class ConfigProfComponent implements OnInit {

  constructor(
    private sair: LogoutService, private criptoService : CriptografiaService,
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
  }

  logout(){
    this.sair.logout()
  }
}
