import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Injectable } from '@angular/core';
import { AlertModalComponent } from '../../components/modals/alert-modal/alert-modal.component';

export enum AlertTypes {
  DANGER = 'danger',
  SUCCESS = 'success',
}

@Injectable({
  providedIn: 'root',
})
export class AlertModalService {
  constructor(private modalService: BsModalService) {}

  private showAlert(pMessage: string, pType: AlertTypes) {
    const bsModalRef: BsModalRef = this.modalService.show(AlertModalComponent);
    bsModalRef.content.type = pType;
    bsModalRef.content.message = pMessage;
  }

  showAlertDanger(pMessage: string): void {
    this.showAlert(pMessage, AlertTypes.DANGER);
  }

  showAlertSuccess(pMessage: string): void {
    this.showAlert(pMessage, AlertTypes.SUCCESS);
  }
}
