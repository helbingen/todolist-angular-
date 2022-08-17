import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { LoginComponent } from '../../pages/conta/login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import CriarLoginComponent from 'src/app/pages/conta/criar-login/criar-login.component';

const loginRoutes: Routes = [
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      { path: '', component: LoginComponent },
      { path: 'criar', component: CriarLoginComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(loginRoutes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
