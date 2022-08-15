import { AccountService } from 'src/app/shared/services/http/account.service';
import { AlertModalService } from 'src/app/shared/services/global/alert-modal.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodolistService } from 'src/app/shared/services/http/todolist.service';
import { Location } from '@angular/common';
import { IAtividade } from 'src/app/shared/models/interfaces/atividade';

@Component({
  selector: 'app-atividades-form',
  templateUrl: './atividades-form.html',
  styleUrls: ['./atividades-form.css'],
})
export class AtividadesFormComponent implements OnInit {
  formulario!: FormGroup | any;
  submitted = false;
  atividade: Object = {};
  atividadeSelecionada!: IAtividade;
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

  validacaoForm(pCampo: string): string {
    if (
      this.formulario.get(pCampo).invalid &&
      this.formulario.get(pCampo).touched
    ) {
      return 'is-invalid';
    }
    return '';
  }

  onCancel(): void {
    this.submitted = false;
    this.formulario.reset();
    this.location.back();
  }

  onSubmit(): void {
    let atividade = this.formulario.controls['atividade'].value;

    if (this.id !== undefined) {
      let body = {
        atividade,
      };
      console.log(body);
      this.atividade = this.service.editarAtividade(this.id, body).subscribe(
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
