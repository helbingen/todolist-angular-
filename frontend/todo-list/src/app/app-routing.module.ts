import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('../app/layouts/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'atividades',
    loadChildren: () =>
      import('../app/layouts/atividades/atividades.module').then(
        (m) => m.AtividadesModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
