import CriarLoginComponent from './pages/conta/criar-login/criar-login.component';
import { ListarAtividadesAbertasComponent } from './pages/atividades/listar-atividades-abertas/listar-atividades-abertas.component';
import { AtividadesFormComponent } from './pages/atividades/atividades-form/atividades-form';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/conta/login/login.component';
import { ListarAtividadesComponent } from './pages/atividades/listar-atividades/listar-atividades.component';

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
