import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor() { }

  async getTarefas() {
    await axios.get("http://localhost:9090/professores/tarefa/index")
  }
}
