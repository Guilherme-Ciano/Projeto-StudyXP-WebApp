import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import axios from 'axios';
import { SnackbarService } from './../../services/snackbar.service';
import { CriptografiaService } from './../../services/criptografia.service';

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
    private criptoService: CriptografiaService
  ) { 
    this.loginForm = formBuilder.group({
      email: ['', [Validators.required]],
      password: ['',[Validators.required]]
    })
  }

  ngOnInit(): void {
    localStorage.clear();
    sessionStorage.clear();
  }

  public async login() {
    await axios.post("http://localhost:9090/login", {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    })
      .then((data) => {
        let user = data.data
        localStorage.setItem("Raw_Data", this.criptoService.criptografar(JSON.stringify(user.data), 'md5'))
        sessionStorage.setItem("logSession", user.hash)
        this.router.navigate(['/aluno/dashboard'])
      })
    }
    // .catch((error) => {
    //   this.snackbar.error("Erro ao efetuar o login")
    // })

}
