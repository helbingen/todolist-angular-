import { AlertModalService } from './atividades/shared/alert-modal.service';
import { AccountService } from './atividades/shared/account.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Usuario } from './usuario';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo-list';
  usuario!: Usuario;
  email: string = 'emai@email.com';
  logado: boolean = false;

  constructor(
    private router: Router,
    private loginService: AccountService,
    private alertModalService: AlertModalService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.emailLogado();
  }

  emailLogado() {
    this.loginService.selectUsuarioLogado().subscribe((dados) => {
      this.email = Object.values(dados)[1];
      this.logado = Object.values(dados)[3];
    });
  }

  Logout() {
    let logado = {
      logado: false,
    };

    this.loginService.updateUserLogado(logado).subscribe();
    this.alertModalService.showAlertSuccess('Usuário deslogado com sucesso!');
    // window.location.reload();
    this.router.navigate(['login']);
  }
}
