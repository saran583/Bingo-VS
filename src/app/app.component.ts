import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bingo';
  buf=0;
  i=0
  val = [];
  flag= true;

 hel(){
    this.val[this.i]=this.buf;
    this.i++;
  }
  change(){
 this.flag= false;
  }
}