import CriarLoginComponent from './conta/criar-login/criar-login.component';
import { ListarAtividadesAbertasComponent } from './atividades/listar-atividades-abertas/listar-atividades-abertas.component';
import { AtividadesFormComponent } from './atividades/atividades-form/atividades-form';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './conta/login/login.component';
import { ListarAtividadesComponent } from './atividades/listar-atividades/listar-atividades.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login/criar', component: CriarLoginComponent },
  { path: 'atividades', component: ListarAtividadesComponent },
  { path: 'atividades/abertas', component: ListarAtividadesAbertasComponent },
  { path: 'novo', component: AtividadesFormComponent },
  { path: 'edit/:id', component: AtividadesFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
