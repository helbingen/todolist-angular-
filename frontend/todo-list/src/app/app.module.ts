import { AtividadesRoutingModule } from './layouts/app/atividades/atividades-routing.module';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { LoginRoutingModule } from './layouts/login/login-routing.module';
import { AlertModalComponent } from './shared/components/modals/alert-modal/alert-modal.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginRoutingModule,
    AtividadesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
  ],
  bootstrap: [AppComponent],
  entryComponents: [AlertModalComponent],
})
export class AppModule {}
