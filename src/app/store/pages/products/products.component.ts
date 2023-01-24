import { Component, OnInit } from '@angular/core';
import { GroupProducts, Product } from '../../models/product.interface';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productsByCategory: GroupProducts[] = [];

  constructor(private _productsService: ProductsService) { }

  ngOnInit(): void {

    this._productsService.getProducts().subscribe((products: Product[]) => {      
      this.productsByCategory = this._groupByCategory(products);
    });

  }

  private _groupByCategory(products: Product[]): GroupProducts[] {
    let listGroup: GroupProducts[] = [];
    products.forEach(product => {
      const item = listGroup.find(g=>g.category === product.category);
      if ( item ){
        item.products.push(product);
      } else {
        listGroup.push({
          category: product.category,
          products: [product]
        })
      }
    });
    return listGroup;
  }

}
