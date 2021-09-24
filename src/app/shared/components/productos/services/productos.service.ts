import { throwError as observableThrowError } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class ProductosService {

  endpoint = environment.API_URL;
  endpointMLA = this.endpoint + 'sites/MLA/';
  query: string = '';

  constructor(
    private http: HttpClient
  ) { }

  ObtenerProductos(query: string = '', limit: number = 4) {
    const QUERY = 'search?q=' + query + '&limit=' + limit;
    const API_URL = this.endpointMLA + QUERY;
    return this.http.get(API_URL)
      .pipe(
        map(
          data => {
            return this.armarObjeto(data);
          }
        ),
        catchError(this.errorHandler)
      );
  }

  obtenerProducto(id: string) {
    const QUERY = 'items/' + id;
    const API_URL = this.endpoint + QUERY;
    return this.http.get(API_URL)
      .pipe(
        map(
          data => {
            return this.armarObjetoProducto(data);
          }
        ),
        catchError(this.errorHandler)
      );
  }

  obtenerDescripcion(id: string) {
    const QUERY = 'items/' + id + '/description';
    const API_URL = this.endpoint + QUERY;
    return this.http.get(API_URL)
      .pipe(
        map(
          data => data,
          catchError(this.errorHandler)
        )
      );
  }

  obtenerCategoria(id: string) {
    const QUERY = 'categories/' + id;
    const API_URL = this.endpoint + QUERY;
    return this.http.get(API_URL)
      .pipe(
        map(
          data => data,
          catchError(this.errorHandler)
        )
      );
  }

  armarObjeto(productos: any) {
    const listaProductos = {
      'categories': [],
      'items': []
    } as any;
    productos.filters[0].values[0].path_from_root.map((categoria: any) => {
      listaProductos.categories.push(categoria.name
      );
    });
    productos.results.map((producto: any) => {
      listaProductos.items.push({
        'id': producto.id,
        'title': producto.title,
        'price': {
          'currency': producto.currency_id,
          'amount': producto.price,
          'decimals': 2
        },
        'picture': producto.thumbnail,
        'condition': producto.condition,
        'free_shipping': producto.shipping.free_shipping,
        'city_name': producto.address.city_name,
        'available_quantity': producto.available_quantity
      });
    });

    return listaProductos;
  }

  armarObjetoProducto(producto: any) {
    const prod = {
      'item': {
        'id': producto.id,
        'title': producto.title,
        'price': {
          'currency': producto.currency_id,
          'amount': producto.price,
          'decimals': 2
        },
        'picture': producto.thumbnail,
        'condition': producto.condition,
        'free_shipping': producto.shipping.free_shipping,
        'sold_quantity': producto.sold_quantity,
        'category_id': producto.category_id,
        'permalink': producto.permalink
      }
    };

    return prod;
  }

  private errorHandler(error: HttpErrorResponse) {
    console.log(error.message)
    return observableThrowError(error.message);
  }
}
