import { Component, OnInit, OnDestroy } from '@angular/core';
import { throwError, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit, OnDestroy {
  productos: any;
  param: any;
  categorias: any;
  cargado: boolean = false;
  subscription: Subscription = new Subscription();
  query: string = '';

  constructor(
    private _activatedRoute: ActivatedRoute,
    private productosService: ProductosService,
  ) { }

  ngOnInit() {
    const currentName = localStorage.getItem('palabra') as string;
    console.log(currentName)
    if (currentName !== '' || currentName !== null || currentName !== undefined) {
      this.ObtenerProductos(currentName, 4);
    }
  }

  ObtenerProductos(search: string, limit: number) {
    this.cargado = true;
    this.subscription = this.productosService.ObtenerProductos(search, limit).subscribe((data) => {
      this.productos = data.items;
      this.categorias = (data.categories.length > 0)
        ? data.categories
        : null;
      this.cargado = false;
    },
      error => {
        this.cargado = false;
        return throwError(error);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}