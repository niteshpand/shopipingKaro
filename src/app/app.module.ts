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
import { FilterPipePipe } from './compenents/shared/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ProductComponent,
    ProductChildComponent,
    LoginComponent,
    FilterPipePipe,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
