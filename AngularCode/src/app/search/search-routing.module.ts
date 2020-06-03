import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SbyidComponent } from './sbyid/sbyid.component';
import { SbyauComponent } from './sbyau/sbyau.component';
import { SbynaComponent } from './sbyna/sbyna.component';
import { SearchComponent } from './search/search.component';
import { FinalComponent } from './final/final.component';


const routes: Routes = [
  {
  path:'search',
  component:SearchComponent
  }
  ,
  {
     path:'search/sbyid',
     component:SbyidComponent
  },
  {  
    path:'search/sbyau',
    component:SbyauComponent
  },
  {
    path:'search/sbyna',
    component:SbynaComponent
  },
  {
    path:'sbyau/:r',
    component:FinalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
