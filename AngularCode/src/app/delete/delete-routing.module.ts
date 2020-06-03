import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DelComponent } from './del/del.component';
import { DellognComponent } from './dellogn/dellogn.component';
import { AuthGuard } from '../auth.guard';


const routes: Routes = [
  {
    path:'delete',
    component:DelComponent
  },
  {
    path:'del/:id/:password',
    component:DellognComponent,
    canActivate:[AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeleteRoutingModule { }
