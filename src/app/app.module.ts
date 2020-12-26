import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { SectiontvComponent } from './home/sectiontv/sectiontv.component';
import { SectionmobileComponent } from './home/sectionmobile/sectionmobile.component';
import { Sectiontv2Component } from './home/sectiontv2/sectiontv2.component';
import { SectionfaqComponent } from './home/sectionfaq/sectionfaq.component';
import { FooterComponent } from './home/footer/footer.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SectiontvComponent,
    SectionmobileComponent,
    Sectiontv2Component,
    SectionfaqComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
