import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ClientloginComponent } from './login/clientlogin/clientlogin.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
// import {MatToolbarModule,MatButtonModule,MatIconModule} from '@angular/material';
// import { ServicesComponent } from './dashboard/services/services.component';
// import { HomeComponent } from './dashboard/home/home.component';
import {MatButtonModule,MatIconModule, MatToolbarModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidenavComponent } from './dashboard/sidenav/sidenav.component';
import { ProjectsComponent } from './projects/projects.component';
import { FilesComponent } from './files/files.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ProjectsComponent,
    FilesComponent,
    // ServicesComponent,
    // HomeComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule
  ],
  // exports:[ServicesComponent],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
