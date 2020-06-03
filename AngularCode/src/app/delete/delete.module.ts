import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteRoutingModule } from './delete-routing.module';
import { DelComponent } from './del/del.component';
import { DellognComponent } from './dellogn/dellogn.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [DelComponent, DellognComponent],
  imports: [
    CommonModule,
    DeleteRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DeleteModule { }
