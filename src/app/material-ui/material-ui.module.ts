import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';

const modules = [ 
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatCardModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatStepperModule,
  MatInputModule,
  MatIconModule
]



@NgModule({
  imports: [
    CommonModule,
    ... modules
  ],
  exports: modules
})
export class MaterialUiModule { }
