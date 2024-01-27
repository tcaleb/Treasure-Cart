import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListItemComponent } from './common/product-list-item/product-list-item.component';
import { LoginComponent } from './main-feartures/login/login.component';
import { CreateAccountComponent } from './main-feartures/create-account/create-account.component';
import { NotFoundErrorComponent } from './common/not-found-error/not-found-error.component';

const routes: Routes = [
  {path: '', component:ProductListItemComponent},
  {path: 'login', component:LoginComponent},
  {path: 'create-account', component:CreateAccountComponent},
  {path: '**', component:NotFoundErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
