import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http: HttpClient) { }

  getProducts() {
    return this._http.get<Product[]>(`${environment.api}products`);
  }
  addCart(product:Product) {
    return this._http.put<Product[]>(`${environment.api}carts/5`,{
      userId:3,
      date:2019-12-10,
      products:[{productId: product.id, quantity:1}]
    });
  }

}

