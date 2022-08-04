import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ClientloginComponent } from './login/clientlogin/clientlogin.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
// import {MatToolbarModule,MatButtonModule,MatIconModule} from '@angular/material';
// import { ServicesComponent } from './dashboard/services/services.component';
// import { HomeComponent } from './dashboard/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    // ServicesComponent,
    // HomeComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    // MatToolbarModule,
    // MatButtonModule,
    // MatIconModule,
  ],
  // exports:[ServicesComponent],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
