import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Product } from '../Models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  databaseUrl : string = 'http://localhost:5000/products'

  test = {id: 6, name: "Ryzen 7", price:2145, color: "White", available: "Not Available"}

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.databaseUrl);
  }

  addProduct(): Observable<Product>{
    return this.http.post<Product>(this.databaseUrl,this.test)
  } 


}
