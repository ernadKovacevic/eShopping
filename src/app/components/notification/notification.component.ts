import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: ` <div class="alert alert-success" [ngClass]="{fade: displayNotification == true}">
                This website uses cookies to provide better user experience  
                <div class="close">
                    <button class="btn" (click)="closeNegotiations($event)">X</button>
                <div>            
              </div>`,
  styles: [`
          div{
              margin: 10px 0px;
              padding: 10px 20px;
              text-align: center;
          }

          .close{
              float: right;
              margin-top: -15px;

          }
          
          .fade{
            visibility: hidden;
            opacity: 0;
            transition: visibility 0s 2s, opacity 2s linear;
          }
  `]
})
export class NotificationComponent implements OnInit {
  displayNotification : boolean = false;
  
  constructor() { }

  closeNegotiations(event: any){
   this.displayNotification = true;
  }
  ngOnInit(): void {
  }

}
