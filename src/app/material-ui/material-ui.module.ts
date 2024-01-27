import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';


const modules = [ 
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatCardModule,
]



@NgModule({
  imports: [
    CommonModule,
    ... modules
  ],
  exports: modules
})
export class MaterialUiModule { }
