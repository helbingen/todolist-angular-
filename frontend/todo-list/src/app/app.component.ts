import { AlertModalService } from './shared/services/global/alert-modal.service';
import { AccountService } from './shared/services/http/account.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { IUsuario } from './shared/models/interfaces/usuario';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo-list';
  usuario!: IUsuario;
  email: string = 'emai@email.com';
  logado: boolean = false;

  constructor(
    private router: Router,
    private loginService: AccountService,
    private alertModalService: AlertModalService
  ) {}

  ngOnInit(): void {
    this.emailLogado();
  }

  emailLogado(): void {
    this.loginService.selectUsuarioLogado().subscribe((dados) => {
      this.email = Object.values(dados)[1];
      this.logado = Object.values(dados)[3];
    });
  }

  Logout(): void {
    let logado = {
      logado: false,
    };

    this.loginService.logout(logado).subscribe();
    this.alertModalService.showAlertSuccess('Usuário deslogado com sucesso!');
    this.router.navigate(['login']);
  }
}
