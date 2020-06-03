import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SbyidComponent } from './sbyid/sbyid.component';
import { SbyauComponent } from './sbyau/sbyau.component';
import { SbynaComponent } from './sbyna/sbyna.component';
import { SearchComponent } from './search/search.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FinalComponent } from './final/final.component';


@NgModule({
  declarations: [SbyidComponent, SbyauComponent, SbynaComponent, SearchComponent, FinalComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SearchModule { }
