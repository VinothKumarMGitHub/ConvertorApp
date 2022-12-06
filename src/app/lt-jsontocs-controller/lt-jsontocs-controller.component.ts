import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'lt-jsontocs-controller',
  templateUrl: './lt-jsontocs-controller.component.html',
  styleUrls: ['./lt-jsontocs-controller.component.css']
})
export class LtJsontocsControllerComponent {

  @Output()
  onConvert: EventEmitter<string> = new EventEmitter<string>();

  public LtJsontocsControllerComponent(){

  }

  public onConvertClicked(){
      this.onConvert.emit("");
  }
}
