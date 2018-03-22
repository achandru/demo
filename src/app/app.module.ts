import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';


import { RouterModule, Routes } from '@angular/router';
import { componentFactoryName } from '@angular/compiler';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

const appRoutes:Routes = [
 
]

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,

  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    routing,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
