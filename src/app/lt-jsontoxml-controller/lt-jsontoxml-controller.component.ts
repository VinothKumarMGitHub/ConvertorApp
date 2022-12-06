import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lt-jsontoxml-controller',
  templateUrl: './lt-jsontoxml-controller.component.html',
  styleUrls: ['./lt-jsontoxml-controller.component.css']
})
export class LtJsontoxmlControllerComponent {

  @Output()
  onConvert: EventEmitter<string> = new EventEmitter<string>();

  public constructor(){

  }

  public onConvertClicked(){
      this.onConvert.emit("");
  }

}
