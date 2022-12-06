import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LtJsontocsPageComponent } from './lt-jsontocs-page/lt-jsontocs-page.component';
import { LtJsontoxmlPageComponent } from './lt-jsontoxml-page/lt-jsontoxml-page.component';
import { LtXmltojsonComponent } from './lt-xmltojson/lt-xmltojson.component';
import { LtXmltocsComponent } from './lt-xmltocs/lt-xmltocs.component';
import { LtHomeComponent } from './lt-home/lt-home.component';


const routes: Routes = [
  {
    path : "",
    component: LtHomeComponent 
  },
  {
    path : "jsontocs",
    component: LtJsontocsPageComponent 
  },
  {
    path : "jsontoxml",
    component: LtJsontoxmlPageComponent 
  },
  {
    path : "xmltojson",
    component: LtXmltojsonComponent 
  },
  {
    path : "xmltocs",
    component: LtXmltocsComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
