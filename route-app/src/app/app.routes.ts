import { Routes } from '@angular/router';
// import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NotfoundPageComponent } from './notfound-page/notfound-page.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    // { path: 'about', component: AboutComponent },
    {path:'about', loadComponent:()=>import('./about/about.component').then((c)=>c.AboutComponent)},
    { path: 'contact', component: ContactComponent },
    { path: 'login', component: LoginComponent },
    { path: 'user/:id/:name', component: UserComponent },
    { path: 'profile', component: ProfileComponent, data: { name: 'Nikhil' } },
    { path: '**', component: NotfoundPageComponent }
];
