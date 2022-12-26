import { Component, OnInit } from '@angular/core';
import { ProductsService } from './Services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = "nesto";

  constructor(private productsService : ProductsService) { }
    
  ngOnInit(): void {
    
  }
}

