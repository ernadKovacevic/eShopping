import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Product } from '../Models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  databaseUrl : string = 'http://localhost:5000/'

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.databaseUrl +'products');
  }

  addToCart(product: Product | undefined): Observable<Product>{
    return this.http.post<Product>(this.databaseUrl + 'cart',product);
  }  

  getFromCart(): Observable<Product[]>{
    return this.http.get<Product[]>(this.databaseUrl + 'cart');
  }

  deleteFromCart(id : string){
    this.http.delete(this.databaseUrl + 'cart/' + id).subscribe((data)=>{
      alert("Product is deleted");
    })
  }


}
