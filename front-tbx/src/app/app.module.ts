import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MaterialModule} from "./material/material.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import 'hammerjs';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import {NgxHmCarouselModule} from "ngx-hm-carousel";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HeaderComponent } from './components/navigation/header/header.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { CollaresComponent } from './components/collares/collares.component';
import { AbrigosComponent } from './components/abrigos/abrigos.component';
import {AppRoutingModule} from "./routing/routing.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import { ShoppingComponent } from './components/shopping/shopping.component';
import { FooterComponent } from './components/navigation/footer/footer.component';
import { LoginComponent } from './components/account/login/login.component';
import { SignupComponent } from './components/account/signup/signup.component';
import { AccountComponent } from './components/account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    CarrouselComponent,
    HeaderComponent,
    WelcomeComponent,
    CollaresComponent,
    AbrigosComponent,
    ShoppingComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    NgxHmCarouselModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
