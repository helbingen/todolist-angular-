import { AccountService } from './../shared/account.service';
import { AlertModalService } from './../shared/alert-modal.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodolistService } from '../shared/todolist.service';
import { Location } from '@angular/common';
import { Atividade } from 'src/app/atividade';

@Component({
  selector: 'app-atividades-form',
  templateUrl: './atividades-form.html',
  styleUrls: ['./atividades-form.css'],
})
export class AtividadesFormComponent implements OnInit {
  formulario!: FormGroup | any;
  submitted = false;
  atividade: Object = {};
  atividadeSelecionada!: Atividade;
  public id = undefined;

  constructor(
    private formBuilder: FormBuilder,
    private service: TodolistService,
    private alertService: AlertModalService,
    private location: Location,
    private route: ActivatedRoute,
    private loginService: AccountService
  ) {
    this.route.params.subscribe((params) => (this.id = params['id']));
  }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      id: [null],
      atividade: [null, Validators.required],
    });
  }

  validacaoForm(campo: string) {
    if (
      this.formulario.get(campo).invalid &&
      this.formulario.get(campo).touched
    ) {
      return 'is-invalid';
    }
    return '';
  }

  onCancel() {
    this.submitted = false;
    this.formulario.reset();
    this.location.back();
  }

  onSubmit() {
    let atividade = this.formulario.controls['atividade'].value;

    if (this.id !== undefined) {
      let body = {
        atividade,
      };
      console.log(body);
      this.atividade = this.service.update2(this.id, body).subscribe(
        (success) => {
          this.alertService.showAlertSuccess('Atividade editada com sucesso!');
          this.location.back();
        },
        (error) =>
          this.alertService.showAlertDanger(
            'Erro ao editar atividade, tente novamente!'
          )
      );
    } else {
      let body = {
        atividade: atividade,
        concluido: false,
        dataConclusao: new Date(0),
        userId: 0,
      };
      if (this.formulario.valid) {
        this.loginService.selectUsuarioLogado().subscribe((dados) => {
          let userId = Object.values(dados)[0];
          body.userId = userId;
          console.log(body);
          this.atividade = this.service.create(body).subscribe(
            (success) => {
              this.alertService.showAlertSuccess(
                'Atividade criada com sucesso!'
              );
              this.location.back();
            },
            (error) =>
              this.alertService.showAlertDanger(
                'Erro ao editar atividade, tente novamente!'
              )
          );
        });
      }
    }
    this.submitted = true;
  }
}
