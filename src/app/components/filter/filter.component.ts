import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  selectedRadioButtonValue: string = "All";
  
  @Input() all: number = 0;
  @Input() available: number = 0;
  @Input() notAvailable: number = 0;

  @Output() changeFilterValue : EventEmitter<string> = new EventEmitter<string>();

  onFilterValueChanged(){
    this.changeFilterValue.emit(this.selectedRadioButtonValue);
    
  }
  

  constructor() { }

  ngOnInit(): void {
  }



}
