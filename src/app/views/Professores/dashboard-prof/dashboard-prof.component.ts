import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-prof',
  templateUrl: './dashboard-prof.component.html',
  styleUrls: ['./dashboard-prof.component.scss']
})
export class DashboardProfComponent implements OnInit {

  user = {
    Nome: localStorage.getItem("Nome")
  }

  constructor() { }

  ngOnInit(): void {
  }

}
