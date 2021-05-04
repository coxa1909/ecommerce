import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeatureSliderComponent } from './componentes/feature-slider/feature-slider.component';
import { ProductGridComponent } from './componentes/product-grid/product-grid.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { BestSellerComponent } from './componentes/best-seller/best-seller.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HeadersComponent } from './componentes/headers/headers.component';
import { HeadersModule } from './componentes/headers/headers.module';
import { BannerModule } from './componentes/banner/banner.module';

@NgModule({
  declarations: [
    AppComponent,
       ],
  exports: [
    AppComponent,
    HeadersComponent,
    FeatureSliderComponent,
    ProductGridComponent,
    BannerComponent,
    BestSellerComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HeadersModule,
    BannerModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
