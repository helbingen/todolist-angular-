import { ListarAtividadesAbertasComponent } from './pages/atividades/listar-atividades-abertas/listar-atividades-abertas.component';
import { AlertModalComponent } from './shared/components/modals/alert-modal/alert-modal.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { TodolistService } from '../app/shared/services/http/todolist.service';
import { LoginComponent } from './pages/conta/login/login.component';
import { AtividadesFormComponent } from './pages/atividades/atividades-form/atividades-form';
import { ListarAtividadesComponent } from './pages/atividades/listar-atividades/listar-atividades.component';
import CriarLoginComponent from './pages/conta/criar-login/criar-login.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AtividadesFormComponent,
    ListarAtividadesComponent,
    CriarLoginComponent,
    ListarAtividadesAbertasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TooltipModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
  ],
  providers: [TodolistService],
  bootstrap: [AppComponent],
  entryComponents: [AlertModalComponent],
})
export class AppModule {}
