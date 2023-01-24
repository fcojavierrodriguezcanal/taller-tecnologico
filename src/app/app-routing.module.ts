import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreComponent } from './store/layouts/store/store.component';
import { ProductsComponent } from './store/pages/products/products.component';

const routes: Routes = [
  {
    path: '' ,
    component: StoreComponent,
    children: [
      { path: '', component: ProductsComponent },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
