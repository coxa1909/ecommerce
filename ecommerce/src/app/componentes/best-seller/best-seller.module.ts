import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BestSellerComponent } from './best-seller.component';



@NgModule({
  declarations: [ BestSellerComponent ],
  exports: [ BestSellerComponent ],
  imports: [
    CommonModule
  ]
})
export class BestSellerModule { }
