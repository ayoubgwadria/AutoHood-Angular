import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms'
import { ListCarComponent } from './components/list-car/list-car.component';
import {AuthInterceptor} from '../app/services/Auth-interceptor.service';
import { CarComponent } from './components/car/car.component';
import { AddCarComponent } from './components/add-car/add-car.component';
import { WcHomeComponent } from './components/home/wc-home/wc-home.component';
import { FeaturesComponent } from './components/home/features/features.component';
import { ListingsComponent } from './components/home/listings/listings.component';
import { TestimonialsComponent } from './components/home/testimonials/testimonials.component';
import { FAQComponent } from './components/home/faq/faq.component';
import { ContactComponent } from './components/home/contact/contact.component';
import { HomePagesComponent } from './components/home-pages/home-pages.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    ListCarComponent,
    CarComponent,
    AddCarComponent,
    WcHomeComponent,
    FeaturesComponent,
    ListingsComponent,
    TestimonialsComponent,
    FAQComponent,
    ContactComponent,
    HomePagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [
    provideClientHydration(),
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
