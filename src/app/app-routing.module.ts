import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { WorkflowOneComponent } from './workflow-one/workflow-one.component';
import { WorkflowTwoComponent } from './workflow-two/workflow-two.component';

const routes: Routes = [
  {path: 'first', component: WorkflowOneComponent},
  {path: 'second', component: WorkflowTwoComponent},
  {path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
