import { NgModule } from '@angular/core';
import { ChildrenOutletContexts, RouterModule, Routes } from '@angular/router';
import { FilesComponent } from './files/files.component';
import { ProjectsComponent } from './projects/projects.component';
import { AuthGuard } from './services/auth.guard';
// import { ServicesComponent } from './dashboard/services/services.component';
// import { HomeComponent } from './dashboard/home/home.component';
//import { ClientloginModule } from "./login/clientlogin/clientlogin/clientlogin.module";



const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./login/login.module').then(module => module.LoginModule)
    // component: LoginModule
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(module => module.DashboardModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'files',
    component: FilesComponent,
    canActivate: [AuthGuard]
  }
  // {
  //   path:'services',
  //   component: ServicesComponent 
  // },
  // {
  //   path:'home',
  //   component: HomeComponent
  // }


];



@NgModule({

  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]

})

export class AppRoutingModule { }