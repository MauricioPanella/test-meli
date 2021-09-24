
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './pages/home/home.component';
import { CoreComponent } from 'src/app/core/core.component';
import { CoreRoutingModule } from 'src/app/core/core-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreRoutingModule,
    BrowserModule,
  ],
  exports: [],
})
export class AbmsModule { }
