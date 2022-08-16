import { ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { AccountService } from 'src/app/shared/services/http/account.service';
import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login.component';
import CriarLoginComponent from 'src/app/pages/conta/criar-login/criar-login.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [LoginComponent, CriarLoginComponent],
  imports: [CommonModule, LoginRoutingModule, ReactiveFormsModule],
  providers: [AccountService],
})
export class LoginModule {}
