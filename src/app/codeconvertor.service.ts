import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class CodeConvertorService {

  constructor(private http: HttpClient, private config: ConfigService) { }

   
  public postJsontoCs( data: any, options?: any) { 
    options = {
      'Access-Control-Allow-Origin': '*',
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
    }

    return this.http.post( this.config.getConfigItem("convertor_domain") +this.config.getConfigItem("convertor_jsontocs"), data, options); 
  } 

  public postJsontoXml( data: any, options?: any) { 
    options = {
      'Access-Control-Allow-Origin': '*',
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
    }

    return this.http.post( this.config.getConfigItem("convertor_domain") + 
            this.config.getConfigItem("convertor_jsontoxml"), data, options); 
  } 


  public post( urlTag:string,  data: any, options?: any) { 
    return this.http.post( this.config.getConfigItem("convertor_domain") + 
            this.config.getConfigItem(urlTag), data, options); 
  } 
   
}
