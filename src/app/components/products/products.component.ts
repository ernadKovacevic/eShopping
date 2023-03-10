import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/product.model';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  filteringValue: string = "All";
  searchingValue: string = "";

  products : Array<Product> = [];
  
  index : number | null = null;

  showDetails(id : number){

    if(this.index === null){
      this.index = id+1;
    }else{

      if(this.index != (id+1)){
        this.index = id + 1;
      }else{
        this.index = null; 
      }
       
    }
  }

  getAllProducts(){
    return this.products.length;
  }

  getAvailableProducts(){
    return this.products.filter(product => product.available === "Available").length
  }

  getNotAvailableProducts(){
    return this.products.filter(product => product.available != "Available").length
  }

  onFilterRadioButtonChange(data: string){
    this.filteringValue = data;
  }

  searchProduct(data: string){
    this.searchingValue = data;
  }

  onBuy(index : number){
    const tempProduct = this.products.find((product)=>{
      return product.id === (index)
    })
    console.log(tempProduct)
    this.productsService.addToCart(tempProduct).subscribe(()=>{
      alert("Product is added to Cart")
    })
  }

  onNotify(){
    alert("Admin team is notified. Thank you for your help");
  }

  constructor(private productsService : ProductsService){}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((data)=>{
      this.products = data;
    })
  }

}
