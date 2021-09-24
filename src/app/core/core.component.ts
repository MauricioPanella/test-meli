import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-core',
  templateUrl: './core.template.html',
  styleUrls: ['./core.component.scss'],
})
export class CoreComponent implements OnInit {
  isLoading: boolean = false;
  constructor(private router: Router) { }
  ngOnInit() {
  }
}