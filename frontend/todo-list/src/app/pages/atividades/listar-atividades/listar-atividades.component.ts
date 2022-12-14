import { AccountService } from 'src/app/shared/services/http/account.service';
import { AlertModalService } from 'src/app/shared/components/modals/alert-modal/alert-modal.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IAtividade } from 'src/app/shared/models/interfaces/atividade';
import { TodolistService } from 'src/app/shared/services/http/todolist.service';

@Component({
  selector: 'app-listar-atividades',
  templateUrl: './listar-atividades.component.html',
  styleUrls: ['./listar-atividades.component.css'],
})
export class ListarAtividadesComponent implements OnInit {
  deleteModalRef!: BsModalRef;
  atividades$!: Observable<IAtividade[]>;
  atividade: Object = {};
  atividadeSelecionada!: IAtividade;

  @ViewChild('deleteModal') deleteModal: any;

  constructor(
    private service: TodolistService,
    private alertService: AlertModalService,
    private loginService: AccountService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.loginService.selectUsuarioLogado().subscribe((dados) => {
      let userId = Object.values(dados)[0];
      this.atividades$ = this.service.listarAtividadesConcluidas(userId);
    });
  }

  onDelete(pAtividade: IAtividade): void {
    this.atividadeSelecionada = pAtividade;
    this.deleteModalRef = this.modalService.show(this.deleteModal, {
      class: 'modal-sm',
    });
  }

  onConfirmDelete(): void {
    this.service.remove(this.atividadeSelecionada.id).subscribe(
      (sucess) => {
        this.deleteModalRef.hide();
        window.location.reload();
      },
      (error) => {
        this.alertService.showAlertDanger(
          'Erro ao excluir atividade. Tente novamente mais tarde.'
        );
        this.deleteModalRef.hide();
      }
    );
  }
  onDeclineDelete(): void {
    this.deleteModalRef.hide();
  }

  onUpdate(pId: number): void {
    this.router.navigate(['edit', pId]), { relativeTo: this.route };
  }

  handleError(): void {
    this.alertService.showAlertDanger(
      'Erro ao carregar atividades. Tente novamente mais tarde.'
    );
  }

  onAbrir(pId: number): void {
    let body = { dataConclusao: null, concluido: false };
    this.atividade = this.service.concluirAtividade(pId, body).subscribe();
    this.router.navigate(['atividades/abertas']);
  }
}
