import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
// import { SharedModule } from "../theme/shared/shared.module";

import { ClientloginComponent } from "./clientlogin/clientlogin.component";

const routes: Routes = [
    {
        path: '',
        component: ClientloginComponent
    },
    // {
    //     path: 'clientlogin',
    //     component: ClientloginComponent
    // }
];

@NgModule({
    declarations: [
      ClientloginComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        
    ]
})
export class LoginModule {}