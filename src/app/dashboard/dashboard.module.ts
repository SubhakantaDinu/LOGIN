import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbcomponentComponent } from './dbcomponent/dbcomponent.component';
import { RouterModule, Routes } from "@angular/router";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule,MatIconModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
// import { HomeComponent } from './home/home.component';




const routes: Routes = [
  {
      path: '',
      component: DbcomponentComponent
  },
  {
    path: 'home',
    component: HomeComponent
},
{
  path: 'services',
  component: ServicesComponent
}
]
  

@NgModule({
  declarations: [DbcomponentComponent, SidenavComponent,HomeComponent,ServicesComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatToolbarModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule
  ]
})
export class DashboardModule { }
