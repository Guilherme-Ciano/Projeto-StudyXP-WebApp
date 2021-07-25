import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

enum MessageType {
  Danger = "danger",
  Success = "success",
  Warn = "warn",
  Default = "default",
}

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  constructor(
    private snackBar: MatSnackBar) {
  }

  Open(message: string, action: string, type?: MessageType) {
    this.snackBar.open(message, action, {
      duration: 2000,
      panelClass: [`style-${type || MessageType.Default}`],
      horizontalPosition: "center",
      verticalPosition: "top",
    });
  }


  error(message: string, action: string = "OK") {
    this.Open(message, action, MessageType.Danger);
  }

  success(message: string, action: string = "OK") {
    this.Open(message, action, MessageType.Success);
  }


  info(message: string, action: string = "OK") {
    this.Open(message, action, MessageType.Default);
  }
}
