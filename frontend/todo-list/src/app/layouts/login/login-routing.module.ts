import { LoginComponent } from './components/login.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import CriarLoginComponent from 'src/app/pages/conta/criar-login/criar-login.component';

const loginRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login/criar', component: CriarLoginComponent },
];

@NgModule({
  imports: [RouterModule.forChild(loginRoutes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
