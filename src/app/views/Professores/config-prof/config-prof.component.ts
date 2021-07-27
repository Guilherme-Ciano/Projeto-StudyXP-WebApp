import { Component, OnInit } from '@angular/core';
import { LogoutService } from 'src/app/services/logout.service';

@Component({
  selector: 'app-config-prof',
  templateUrl: './config-prof.component.html',
  styleUrls: ['./config-prof.component.scss']
})
export class ConfigProfComponent implements OnInit {

  constructor(
    private sair: LogoutService
  ) { }

  ngOnInit(): void {
  }

  logout(){
    this.sair.logout()
  }
}
