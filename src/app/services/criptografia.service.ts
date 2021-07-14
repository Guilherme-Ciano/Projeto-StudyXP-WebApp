import { Injectable } from '@angular/core';
import * as CryptoJS from "crypto-js";

@Injectable({
  providedIn: 'root'
})
export class CriptografiaService {

  constructor() { }

  criptografar(texto: string, chave: string) {
    return CryptoJS.AES.encrypt(texto, chave).toString();
  }

  descriptografar(texto: string, chave: string) {
    const message = CryptoJS.AES.decrypt(texto, chave);
    return message.toString(CryptoJS.enc.Utf8);
  }
}
