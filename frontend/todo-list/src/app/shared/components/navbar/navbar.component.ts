import { Router } from '@angular/router';
import { AlertModalService } from './../modals/alert-modal/alert-modal.service';
import { AccountService } from './../../services/http/account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private loginService: AccountService,
    private alertModalService: AlertModalService,
    private router: Router
  ) {}

  ngOnInit() {}

  Logout(): void {
    let logado = {
      logado: false,
    };

    this.loginService.logout(logado).subscribe();
    this.alertModalService.showAlertSuccess('Usuário deslogado com sucesso!');
    this.router.navigate(['login']);
  }
}
