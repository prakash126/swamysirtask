import { Component } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'iframehtml';

  fun1(){
    $('#div1').css('width','100%').css('height','100%');
  }
}
