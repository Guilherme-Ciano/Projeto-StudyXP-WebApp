import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CriarTarefaComponent } from '../views/Professores/criar-tarefa/criar-tarefa.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(CriarTarefaComponent, {
      // width: '550px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
