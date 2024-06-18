import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './compenents/header/header.component';
import { CartComponent } from './compenents/cart/cart.component';
import { ProductComponent } from './compenents/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductChildComponent } from './compenents/product/product-child/product-child.component';
import { LoginComponent } from './compenents/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ProductComponent,
    ProductChildComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
