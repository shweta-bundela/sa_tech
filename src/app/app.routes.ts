import { Routes } from '@angular/router';
//import { RouterModule } from '@angular/router';
import { WhatWeThinkComponent } from './components/what-we-think/what-we-think.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    {
        path: "", component: HomeComponent
    },
    {
        path: "what-we-think", component: WhatWeThinkComponent
    },
    {
        path: "what-we-do", component: ServicesComponent
    },
    {
        path: "about", component: AboutComponent
    },
    {
        path: "contact", component: ContactComponent
    }
];
