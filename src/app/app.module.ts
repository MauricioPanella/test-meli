import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './modules/meli/pages/home/home.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { MaterialModule } from './core/material.module';
import { BuscadorComponent } from './shared/components/buscador/buscador.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ProductosModule } from './shared/components/productos/productos.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    BuscadorComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    MaterialModule,
    HttpClientModule,
    AppRoutingModule,
    ProductosModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
