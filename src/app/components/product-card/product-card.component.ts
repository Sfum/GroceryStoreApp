import { Component } from '@angular/core';
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  constructor(private productService: ProductService) {}

  productsSupplierView$ = this.productService.products$
}
