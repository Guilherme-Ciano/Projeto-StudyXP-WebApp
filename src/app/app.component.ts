import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'xpLearn';

  pagina = {
    home: "/",
    help: "help",
  }

  navegacaoOBJ = JSON.stringify(this.pagina)
  ngOnInit(): void {
    sessionStorage.setItem("Navegacao", this.navegacaoOBJ)
  }


  navegacao = JSON.parse(this.navegacaoOBJ);

  home = this.navegacao.home;
  help = this.navegacao.help;
}
