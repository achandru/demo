import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { Router } from '@angular/router/src/router';

const appRoutes: Routes = [
    {
    path: '',
    component: WelcomePageComponent
}];
 export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
