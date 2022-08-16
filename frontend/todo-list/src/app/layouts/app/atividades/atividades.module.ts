import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { AtividadesRoutingModule } from './atividades-routing.module';
import { TodolistService } from './../../../shared/services/http/todolist.service';
import { ListarAtividadesComponent } from './../../../pages/atividades/listar-atividades/listar-atividades.component';
import { ListarAtividadesAbertasComponent } from './../../../pages/atividades/listar-atividades-abertas/listar-atividades-abertas.component';
import { AtividadesFormComponent } from './../../../pages/atividades/atividades-form/atividades-form';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, AtividadesRoutingModule, ReactiveFormsModule],
  declarations: [
    AtividadesFormComponent,
    ListarAtividadesAbertasComponent,
    ListarAtividadesComponent,
    NavbarComponent,
  ],
  providers: [TodolistService],
})
export class AtividadesModule {}
