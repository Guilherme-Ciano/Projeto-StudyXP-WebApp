import { Injectable } from '@angular/core';
import { Tarefa } from './../model/Tarefa';
import { ApiServiceService } from './api-service.service';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {
  tarefas: Tarefa[]

  constructor(
    private apiService: ApiServiceService
  ) { }

  getTarefas(){
    this.apiService.getTarefas().then((dados) => {
      
    })
  }
}
