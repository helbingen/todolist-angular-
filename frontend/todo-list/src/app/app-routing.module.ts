import { ListarAtividadesAbertasComponent } from './pages/atividades/listar-atividades-abertas/listar-atividades-abertas.component';
import { AtividadesFormComponent } from './pages/atividades/atividades-form/atividades-form';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarAtividadesComponent } from './pages/atividades/listar-atividades/listar-atividades.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('../app/layouts/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'atividades',
    loadChildren: () =>
      import('../app/layouts/app/atividades/atividades.module').then(
        (m) => m.AtividadesModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
