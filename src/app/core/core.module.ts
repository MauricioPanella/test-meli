import { CoreComponent } from './core.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    CoreComponent,

  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    BrowserModule,
    MaterialModule,
  ],
  providers: [
  ],
  exports: [RouterModule],
  entryComponents: [
  ],
})
export class CoreModule { }
