import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { LoginService } from '../service/login/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username = '';
  password = '';
  user: User;
  mensagem = '';

  constructor(private serv: LoginService) { }

  ngOnInit() {
  }

  register() {
    this.user = {username: this.username, password: this.password};
    if (this.serv.register(this.user)) {
      this.mensagem = 'Cadastrado com sucesso';
    }
    this.mensagem = 'Já existe username';
  }

}
