import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { TodoComponent } from './todo/todo.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
//welcome
export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'contact',component:ContactUsComponent},
    {path:'login',component:LoginComponent,canActivate:[RouteGuardService]},
    {path:'welcome/:name',component:WelcomeComponent},
    {path:'todos',component:ListTodosComponent,canActivate:[RouteGuardService]},
    {path:'todos/:message',component:ListTodosComponent,canActivate:[RouteGuardService]},
    {path:'logout',component:LogoutComponent,canActivate:[RouteGuardService]},
    {path:'todo/:id',component:TodoComponent,canActivate:[RouteGuardService]},
    {path:'**',component:ErrorComponent}
];


