import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  constructor(
    private _snackBar: MatSnackBar) {
  }

  error(message: string) {
    return this._snackBar.open(message, 'Erro', {
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }

  success(message: string) {
    return this._snackBar.open(message, 'Sucesso', {
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }

  info(message: string) {
    return this._snackBar.open(message, 'Info', {
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }
}
