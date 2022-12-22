import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  slogan: string = "Your one stop shop for everything.";
  source: string = "/assets/eshopping.jpg";
  
  
  constructor() { }

  ngOnInit(): void {
  }
}
