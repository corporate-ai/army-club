import { Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';

import { RouteGuardService } from './service/route-guard.service';
import { WelcomeComponent } from './welcome/welcome.component';
//welcome
export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'contact',component:ContactUsComponent},
    {path:'welcome/:name',component:WelcomeComponent},
    {path:'**',component:ErrorComponent}
];


