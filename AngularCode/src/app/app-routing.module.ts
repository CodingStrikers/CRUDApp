import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { SearchComponent } from './search/search/search.component';
import { DelComponent } from './delete/del/del.component';


const routes: Routes = [
  {
    path:'menu',
    component:MenuComponent
  },
  {
    path:'add',
    component:AddComponent
  }
,
{
  path:'update',
  component:UpdateComponent
}
,
{
  path:'search',
  component:SearchComponent
}
//,
// {
//   path:'delete',
//   component:DelComponent
// }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
