import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  onLogin(usuario: string, senha: string): boolean {
    if (usuario === 'user' && senha === '111') {
      sessionStorage.setItem('autenticado', 'sim');
      return true;
    } else {
      return false;
    }
  }

  onLogoff() {
    sessionStorage.clear();
    return true;
  }

  estaLogado() {
    if (sessionStorage.getItem('autenticado')) {
      return true;
    } else {
      return false;
    }
  }
}
