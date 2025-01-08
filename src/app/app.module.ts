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
import { WcHomeComponent } from './components/homePages/wc-home/wc-home.component';
import { FeaturesComponent } from './components/homePages/features/features.component';
import { ListingsComponent } from './components/homePages/listings/listings.component';
import { TestimonialsComponent } from './components/homePages/testimonials/testimonials.component';
import { FAQComponent } from './components/homePages/faq/faq.component';
import { ContactComponent } from './components/homePages/contact/contact.component';
import { HomeComponent } from './components/home/home.component';


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
    HomeComponent,
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
