import { NavigationEnd, Router } from '@angular/router';
import { AlertModalService } from './../../../shared/components/modals/alert-modal/alert-modal.service';
import { AccountService } from './../../../shared/services/http/account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atividades-layout',
  templateUrl: './atividades-layout.component.html',
  styleUrls: ['./atividades-layout.component.css'],
})
export class AtividadesLayoutComponent implements OnInit {
  constructor(
    private loginService: AccountService,
    private alertModalService: AlertModalService,
    private router: Router
  ) {}

  urlAtual: string = '';

  ngOnInit(): void {
    // this.rotaAtiva()
  }

  // rotaAtiva() {
  //   this.router.events.subscribe((e: any) => {
  //     if (e instanceof NavigationEnd) {
  //       this.urlAtual = e.url;
  //       // console.log(this.urlAtual);
  //     }
  //   });
  // }

  logout(): void {
    let logado = {
      logado: false,
    };

    this.loginService.logout(logado).subscribe();
    this.alertModalService.showAlertSuccess('Usuário deslogado com sucesso!');
    this.router.navigate(['login']);
  }
}
