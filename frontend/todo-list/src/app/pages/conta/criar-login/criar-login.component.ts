import { AlertModalService } from '../../../shared/services/global/alert-modal.service';
import { AccountService } from '../../../shared/services/http/account.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-criar-login',
  templateUrl: './criar-login.component.html',
  styleUrls: ['./criar-login.component.css'],
})
export default class CriarLoginComponent implements OnInit {
  formulario!: FormGroup | any;
  usuario: Object = {};

  constructor(
    private formBuilder: FormBuilder,
    private loginService: AccountService,
    private alertModalService: AlertModalService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      email: [
        null,
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      senha: [null, Validators.required],
    });
  }

  CriarLogin(): void {
    let email = this.formulario.controls['email'].value;
    let senha = this.formulario.controls['senha'].value;

    let usuario = {
      email: email,
      senha: senha,
      logado: false,
    };
    this.loginService.loginExiste(usuario).subscribe(
      (usuario) => {
        let emailExistente = Object.values(usuario)[1];
        if (email === emailExistente) {
          this.alertModalService.showAlertDanger('Email já cadastrado');
          this.location.back();
        }
      },
      (error) => {
        this.loginService.criarLogin(usuario).subscribe();
        this.alertModalService.showAlertSuccess('Login criado com sucesso!');
        this.location.back();
      }
    );
  }
}
