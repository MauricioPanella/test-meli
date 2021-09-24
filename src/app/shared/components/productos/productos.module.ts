
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado/listado.component';
import { DetalleComponent } from './detalle/detalle.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosService } from './services/productos.service';
import { NoEncontradoComponent } from '../no-encontrado/no-encontrado.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ListadoComponent,
    DetalleComponent,
    CategoriaComponent,
    NoEncontradoComponent,
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    MatButtonModule
  ],
  providers: [ProductosService,
  ]
})
export class ProductosModule { }
