import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { ViewHeaderComponent } from './views/header/header.component';
import { ViewFooterComponent } from './views/footer/footer.component';
import { ViewMainComponent } from './views/main/main.component';
import { ViewCarouselComponent } from './views/main/components/carousel/carousel.component';
import { ViewInfoProductComponent } from './views/main/components/info-product/info-product.component';
import { ViewCardComponent } from './views/main/components/info-product/components/card/card.component';
import { ViewTableComponent } from './views/main/components/info-product/components/table/table.component';

@NgModule({
  declarations: [
    AppComponent,

    ViewHeaderComponent,
    ViewFooterComponent,
    ViewMainComponent,
    ViewCarouselComponent,
    ViewInfoProductComponent,
    ViewCardComponent,
    ViewTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
