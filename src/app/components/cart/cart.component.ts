import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/product.model';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products : Array<Product> = [];

  constructor(private productsService : ProductsService) { }

  deleteItem(id : number){
    this.productsService.deleteFromCart(String(id));
  }

  totalPrice(){
    let price = 0;
    for(let product of this.products){
      price = price + product.price;
    }
    return price;
  }


  ngOnInit(): void {
    this.productsService.getFromCart().subscribe((data)=>{
      this.products = data;
    })
  }

}
