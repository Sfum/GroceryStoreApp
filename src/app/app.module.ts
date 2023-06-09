import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductCardDetailComponent } from './components/product-card/product-card-detail/product-card-detail.component';
import {MatCardModule} from "@angular/material/card";
import {RouterLink, RouterOutlet} from "@angular/router";

import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    ProductCardDetailComponent,
  ],
	imports: [
		BrowserModule,
		MatCardModule,
		RouterOutlet,
		HttpClientModule,
		RouterLink,
		MatIconModule,
		MatButtonModule
	],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
