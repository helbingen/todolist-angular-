import { AlertModalService } from './../../atividades/shared/alert-modal.service';
import { AccountService } from './../../atividades/shared/account.service';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formulario!: FormGroup | any;
  usuario: any = {};

  constructor(
    private formBuilder: FormBuilder,
    private loginService: AccountService,
    private alertModalService: AlertModalService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.loginService.selectUsuarioLogado(this.usuario);

    this.formulario = this.formBuilder.group({
      email: [
        null,
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ], //REGEX para validação de e-mail, por algum motivo o Validators.email não funcionou
      senha: [null, Validators.required],
    });
  }

  login() {
    let usuario = {
      email: this.formulario.controls['email'].value,
      senha: this.formulario.controls['senha'].value,
      logado: false,
    };

    let usuarioLogado = {
      logado: true,
    };
    this.loginService.loginExiste(usuario).subscribe(
      (users) => {
        let email = Object.values(users)[1];
        let senhaBd = Object.values(users)[2];
        this.loginService
          .validacaoSenhaCrypto(usuario.senha)
          .subscribe((senha) => {
            if (email === usuario.email && senha === senhaBd) {
              this.loginService
                .usuarioLogado(usuario.email, usuarioLogado)
                .subscribe();
              this.router.navigate(['atividades/abertas']);
            } else {
              this.alertModalService.showAlertDanger(
                'Usuário ou senha inválido. Tente novamente!'
              );
              usuarioLogado.logado = false;
            }
          });
      },
      (error) => {
        this.alertModalService.showAlertDanger('Email não cadastrado.');
      }
    );
  }
}
