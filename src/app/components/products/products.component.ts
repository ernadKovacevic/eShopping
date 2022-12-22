import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  filteringValue: string = "All";
  searchingValue: string = "";

  products = [
    {id: 1, name: "Minimalist Analog watch", price:109, color: "Black", available: "Available"},
    {id: 2, name: "HD smart TV", price:3339, color: "Black", available: "Available"},
    {id: 3, name: "Apple Iphone 12", price:1850, color: "Black", available: "Available"},
    {id: 4, name: "LG washing machine", price:1765, color: "White", available: "Available"},
    {id: 5, name: "LG refrigerator", price:2810, color: "White", available: "Not Available"},
    {id: 6, name: "Ryzen 7", price:2145, color: "White", available: "Not Available"}
  ];
 
  displayDetails : boolean = true;

  showDetails(event: any){
    console.log(event.target);

    this.displayDetails = !this.displayDetails;
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

  constructor() { }

  ngOnInit(): void {
    
  }

}
