import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login/login.service';
import { User } from '../model/user';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = '';
  senha = '';
  mensagemErro = '';

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  onLogin() {
    const user: User = {username: this.usuario, password: this.senha}
    if (this.loginService.onLogin(user)) {
      this.mensagemErro = '';
      this.router.navigate(['/todo-list']);
    } else {
      this.mensagemErro = 'Usuário ou senha inválidos!';
    }
  }

}
