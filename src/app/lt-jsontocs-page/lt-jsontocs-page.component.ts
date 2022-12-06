import { Component, OnInit } from '@angular/core';
import { CodeConvertorService } from '../codeconvertor.service';

@Component({
  selector: 'app-lt-jsontocs-page',
  templateUrl: './lt-jsontocs-page.component.html',
  styleUrls: ['./lt-jsontocs-page.component.css']
})
export class LtJsontocsPageComponent  implements OnInit  {
 


    public splitViewValue = {
        sourceMode : "json",
        destMode: "csharp",
        sourceValue:"",
        destValue: ""
    };

    public constructor( private service: CodeConvertorService){
    }

    public ngOnInit(){
      
    }

    public onConvertClicked(value:string){
        this.service.postJsontoCs(  this.splitViewValue.sourceValue  ).subscribe( ( response:any) =>{
               this.splitViewValue.destValue = response["message"];
        } );
        
    }
}
