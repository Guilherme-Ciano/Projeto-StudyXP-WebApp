import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import axios from 'axios';
import { SnackbarService } from './../../services/snackbar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private snackbar: SnackbarService,
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
      password: this.loginForm.value.password,
    })
      .then((data) => {
        let user = data.data
        console.log(user)
        console.log(user.data)
        console.log(user.hash)
        localStorage.setItem("Nome", user.data.nome);
        localStorage.setItem("Ano", user.data.grade);
        localStorage.setItem("Email", user.data.email)
        localStorage.setItem("RA", user.data.ra);
        localStorage.setItem("LVL", user.data.level);
        sessionStorage.setItem("logSession", user.hash)
        this.router.navigate(['/aluno/dashboard'])
      })
      .catch((error) => {
        this.snackbar.error("Erro ao efetuar o login")
      })
  }

}
