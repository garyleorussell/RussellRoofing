import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ResidentialComponent } from './pages/residential/residential.component';
import { CommercialComponent } from './pages/commercial/commercial.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ResidentialComponent,
    CommercialComponent,
    ContactComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
