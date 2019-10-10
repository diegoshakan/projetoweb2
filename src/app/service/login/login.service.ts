import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private users: User[] = [{ username: 'user', password: '111'}];

  constructor(private router: Router) { }

  // onLogin(usuario: string, senha: string): boolean {
  onLogin(user: User): boolean {
    for (const u of this.users) {
      if (u.username === user.username && u.password === user.password) {
        sessionStorage.setItem('autenticado', 'sim');
        this.router.navigate(['/tasks']);
        return true;
      }
    }
    return false;
  }
    // if (usuario === 'user' && senha === '111') {
    //   sessionStorage.setItem('autenticado', 'sim');
    //   return true;
    // } else {
    //   return false;
    // }
  // }

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

  register(user: User) {
    const exists = this.users.find((u) => {
      return u.username === user.username;
    });
    if (exists === undefined) {
      this.users.push(user);
      this.router.navigate(['/login']);
      return true;
    }
    return false;
  }
}
