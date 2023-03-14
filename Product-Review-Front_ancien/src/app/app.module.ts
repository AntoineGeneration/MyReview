import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {RouterModule, Routes} from "@angular/router";
import { ProduitsComponent } from './produits/produits.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { PublicationsComponent } from './publications/publications.component';


const routes: Routes =[
  { path: "produits", component:ProduitsComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProduitsComponent,
    PublicationsComponent
  ],

  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
