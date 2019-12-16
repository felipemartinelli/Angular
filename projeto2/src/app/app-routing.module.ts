import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CorpoComponent } from './corpo/corpo.component';
import { TarefasComponent } from './tarefas/tarefas.component';
import { BuscaComponent } from './busca/busca.component';


const routes: Routes = [
  { path: '', redirectTo: 'corpo', pathMatch: 'full' },
  { path: 'corpo', component: CorpoComponent},
  { path: 'tarefas', component: TarefasComponent},
  { path: 'busca', component: BuscaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
