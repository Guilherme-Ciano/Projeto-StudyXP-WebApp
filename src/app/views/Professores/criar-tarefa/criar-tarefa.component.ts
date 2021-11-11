import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import axios from 'axios';
import { Router } from '@angular/router';
import { DialogService } from 'src/app/services/dialog.service';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { Observable, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-criar-tarefa',
  templateUrl: './criar-tarefa.component.html',
  styleUrls: ['./criar-tarefa.component.scss'],
})
export class CriarTarefaComponent implements OnInit {
  tarefaForm: FormGroup;
  base64Output: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private dialog: DialogService,
    private apiService: ApiServiceService
  ) {}

  ngOnInit(): void {
    this.tarefaForm = this.fb.group({
      titulo: ['', [Validators.required]],
      descricao: ['', [Validators.required]],
      limite_data: ['', [Validators.required]],
      xp: ['', [Validators.required]],
      classe: ['', [Validators.required]],
      flag: 'pendente',
      fileLink: '',
    });
  }

  onFileSelected(event) {
    this.convertFile(event.target.files[0]).subscribe((base64) => {
      this.base64Output = base64;
    });
  }

  convertFile(file: File): Observable<string> {
    const result = new ReplaySubject<string>(1);
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = (event) =>
      result.next(btoa(event.target.result.toString()));
    return result;
  }

  async enviarTarefa() {
    var filename = (document.getElementById('fileName') as HTMLInputElement)
      .value;
    await axios
      .post('http://localhost:9090/alunos/img', {
        file: this.base64Output,
        fileName: filename,
      })
      .then((resposta) => {
        this.tarefaForm.value.fileLink = resposta.data.url;
      });
    await axios.post(
      'http://localhost:9090/professores/tarefas/create',
      this.tarefaForm.value
    );
    this.apiService.refresh();
  }
}
