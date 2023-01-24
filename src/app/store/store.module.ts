import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsComponent } from './pages/products/products.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { StoreComponent } from './layouts/store/store.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ProductsComponent,
    HeaderComponent,
    FooterComponent,
    StoreComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class StoreModule { }
