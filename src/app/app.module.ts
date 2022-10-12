import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ApidataComponent } from './apidata/apidata.component';
import { RouterModule, Routes } from '@angular/router';

const appRoute:Routes=[
  {
    path:"",component:ApidataComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ApidataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
