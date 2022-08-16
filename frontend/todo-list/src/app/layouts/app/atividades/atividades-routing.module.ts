import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtividadesFormComponent } from 'src/app/pages/atividades/atividades-form/atividades-form';
import { ListarAtividadesAbertasComponent } from 'src/app/pages/atividades/listar-atividades-abertas/listar-atividades-abertas.component';
import { ListarAtividadesComponent } from 'src/app/pages/atividades/listar-atividades/listar-atividades.component';

const atividadesRoutes: Routes = [
  { path: 'atividades/concluidas', component: ListarAtividadesComponent },
  { path: 'atividades/abertas', component: ListarAtividadesAbertasComponent },
  { path: 'novo', component: AtividadesFormComponent },
  { path: 'edit/:id', component: AtividadesFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(atividadesRoutes)],
  exports: [RouterModule],
})
export class AtividadesRoutingModule {}
