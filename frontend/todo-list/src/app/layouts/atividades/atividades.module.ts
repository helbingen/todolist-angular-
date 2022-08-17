import { ListarAtividadesAbertasComponent } from 'src/app/pages/atividades/listar-atividades-abertas/listar-atividades-abertas.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AtividadesRoutingModule } from './atividades-routing.module';
import { TodolistService } from 'src/app/shared/services/http/todolist.service';
import { ListarAtividadesComponent } from 'src/app/pages/atividades/listar-atividades/listar-atividades.component';
import { AtividadesFormComponent } from 'src/app/pages/atividades/atividades-form/atividades-form';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, AtividadesRoutingModule, ReactiveFormsModule],
  declarations: [
    AtividadesFormComponent,
    ListarAtividadesAbertasComponent,
    ListarAtividadesComponent,
  ],
  providers: [TodolistService],
})
export class AtividadesModule {}
