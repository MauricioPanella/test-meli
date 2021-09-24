import { Component, OnInit, OnDestroy } from '@angular/core';
import { throwError, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit, OnDestroy {
  producto: any;
  descripcionProducto: any;
  categoriaProducto: any = [];
  categoriaSubscription: Subscription = new Subscription();
  productoSubscription: Subscription = new Subscription();
  detalleSubscription: Subscription = new Subscription();
  cargado: boolean = false;
  productoPermalink:string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private productosService: ProductosService,
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      this.obtenerProducto(id);
    });
  }

  obtenerProducto(id: string) {
    this.cargado = true;
    this.productoSubscription = this.productosService.obtenerProducto(id).subscribe(
      data => {
        this.producto = data.item;
        this.productoPermalink = this.producto.permalink;
        this.obtenerDescripcion(id);
        this.obtenerCategoria(data['item']['category_id']);
        this.cargado = false;
      },
      error => {
        this.cargado = false;
        return throwError(error);
      }
    );
  }

  private obtenerDescripcion(id: string) {
    this.detalleSubscription = this.productosService.obtenerDescripcion(id).subscribe(
      (detalle: any) => {
        this.descripcionProducto = detalle['plain_text'];
      }
    );
  }

  private obtenerCategoria(id: string) {
    this.categoriaSubscription = this.productosService.obtenerCategoria(id).subscribe(
      (data: any) => {
        if (data['path_from_root'].length > 0) {
          data['path_from_root'].map((categoria: any) => {
            this.categoriaProducto.push(
              categoria.name
            );
          });
        } else {
          this.categoriaProducto.push('Sin categorias');
        }
      },
      error => {
        this.categoriaProducto.push('Sin categorias');
        return throwError(error);
      }
    );
  }

  ngOnDestroy() {
    this.productoSubscription.unsubscribe();
    if (this.detalleSubscription !== null) {
      this.detalleSubscription.unsubscribe();
    }
    if (this.categoriaSubscription !== null) {
      this.categoriaSubscription.unsubscribe();
    }
  }
}