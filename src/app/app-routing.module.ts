import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TrabalhoComponent } from './trabalho/trabalho.component';
import { EstudosComponent } from './estudos/estudos.component';
import { FinanceiroComponent } from './financeiro/financeiro.component';



const routes: Routes = [
  {path: 'trabalho', component: TrabalhoComponent},
  {path: 'estudos', component: EstudosComponent},
  {path: 'financeiro', component: FinanceiroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
