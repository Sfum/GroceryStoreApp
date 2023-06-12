import { Injectable } from '@angular/core';
import {Product} from "../models/product";
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs";
import {CategoryService} from "./category.service";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  MOCK_URL = 'assets/json/product-data.json';

  categories$ = this.categoryService.categories$

  products$ = this.httpClient
      .get<Product[]>(this.MOCK_URL)
      .pipe(tap((data) => console.log('Product: ', JSON.stringify)));

  constructor(
      private httpClient: HttpClient,
      private categoryService: CategoryService
  ) {}

}
