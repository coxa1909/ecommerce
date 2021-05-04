import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureSliderComponent } from './feature-slider.component';



@NgModule({
  declarations: [ FeatureSliderComponent ],
  exports: [ FeatureSliderComponent ],
  imports: [
    CommonModule
  ]
})
export class FeatureSliderModule { }
