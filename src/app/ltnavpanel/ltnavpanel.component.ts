import { Component } from '@angular/core';

@Component({
  selector: 'ltnavpanel',
  templateUrl: './ltnavpanel.component.html',
  styleUrls: ['./ltnavpanel.component.css']
})
export class LtnavpanelComponent {

  public navLinks = [ 
     { 
      name: "JSON to CSharp",
      link: "jsontocs"
     }   , 
     {
      name: "JSON to XML",
      link: "jsontoxml"
     }, 
     {
      name: "XML to JSON",
     link: "xmltojson"
    }, 
    {
      name: "XML to CSharp",
      link: "xmltocs"
    }];

  public LtnavpanelComponent(){
     
  }

}
