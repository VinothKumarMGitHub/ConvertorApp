import { Component, Input, ViewChild, OnInit, ElementRef } from '@angular/core';
import { AceEditorComponent } from 'ng2-ace-editor';
import { ConfigService } from '../config.service';

@Component({
  selector: 'lt-spliteditor',
  templateUrl: './lt-spliteditor.component.html',
  styleUrls: ['./lt-spliteditor.component.css']
})
export class LtSpliteditorComponent implements OnInit{

  // @ViewChild('sourceEditor', {static: false}) sourceEditor: ElementRef;
  // @ViewChild('destinationEditor', {static: false})  destinationEditor: ElementRef ;

  public editorTheme:string = "";

  constructor(private config: ConfigService){
  }

  @Input()
  public editorValue = {
    sourceMode:"javascript",
    sourceValue: "",
    destMode: "javascript",
    destValue: ""
  }; 

  public ngOnInit(){
    this.editorTheme = this.config.getConfigItem("themeName");
  }

  //Updating changed value back to source
  public onSourceValueChanged(event:any){
    this.editorValue.sourceValue = event;
  }

}
