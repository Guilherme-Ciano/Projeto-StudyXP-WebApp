import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) { 
    this.loginForm = formBuilder.group({
      email: ['', [Validators.required]],
      password: ['',[Validators.required]]
    })
  }

  ngOnInit(): void {
    localStorage.clear();
  }

  public async login() {
    await axios.post("http://localhost:9090/login", {
      email: this.loginForm.value.email,
      // password: this.loginForm.value.password,
    })
      .then((data) => {
        let user = data.data
        console.log(user)
        localStorage.setItem("Nome", user.nome);
        localStorage.setItem("Ano", user.grade);
        localStorage.setItem("RA", user.ra);
        localStorage.setItem("LVL", user.level);
        sessionStorage.setItem("logSession", localStorage.getItem("RA"))
        this.router.navigate(['/aluno/dashboard'])
      });
  }

}
