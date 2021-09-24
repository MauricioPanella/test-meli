import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent {

  constructor(private router: Router) { }

  buscar(cadena: string) {
    if (cadena !== '') {
      localStorage.setItem ("palabra", cadena);
      this.router.navigate(['/items']);
    }else{
      localStorage.setItem('palabra', '')
    }
  }
}
