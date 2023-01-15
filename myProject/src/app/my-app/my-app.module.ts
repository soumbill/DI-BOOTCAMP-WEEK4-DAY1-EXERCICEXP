import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreatingComponent } from '../greating/greating.component';
import { ProductComponent } from '../product/product.component';



@NgModule({
  declarations: [
    GreatingComponent,
    ProductComponent
  ],
  exports : [
    GreatingComponent,
    ProductComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MyAppModule { }
