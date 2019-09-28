import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login/login.service';



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
    if (this.loginService.onLogin(this.usuario, this.senha)) {
      this.mensagemErro = '';
      this.router.navigate(['/todo-list']);
    } else {
      this.mensagemErro = 'Usuário ou senha inválidos!';
    }
  }

}
