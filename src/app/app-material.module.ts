import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatIconModule,
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatIconModule,
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
  ]
})
export class AppMaterialModule { }
