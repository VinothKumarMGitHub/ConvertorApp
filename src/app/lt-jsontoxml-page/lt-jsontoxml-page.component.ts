import { Component } from '@angular/core';
import { CodeConvertorService } from '../codeconvertor.service';

@Component({
  selector: 'app-lt-jsontoxml-page',
  templateUrl: './lt-jsontoxml-page.component.html',
  styleUrls: ['./lt-jsontoxml-page.component.css']
})
export class LtJsontoxmlPageComponent {

  splitViewValue = {
    sourceMode : "json",
    destMode: "csharp",
    sourceValue:"",
    destValue: ""
  };

  public constructor( private service: CodeConvertorService){
  }

  public onConvertClicked(value:string){
    this.service.post( "convertor_jsontoxml",  this.splitViewValue.sourceValue  ).subscribe( ( response:any) =>{
           this.splitViewValue.destValue = response["message"];
    } );
  }
}
