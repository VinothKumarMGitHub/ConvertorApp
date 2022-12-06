//ng add @angular/material
//npm install angular-split
//npm install ngx-watermark

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; //ng add @angular/material
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar'; 
import { MatIconModule } from '@angular/material/icon'
import { MatGridListModule } from '@angular/material/grid-list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button'

import { AngularSplitModule } from 'angular-split'; 
import { AceEditorModule } from 'ng2-ace-editor';
import { NgxWatermarkModule } from 'ngx-watermark';

import { LtnavpanelComponent } from './ltnavpanel/ltnavpanel.component';
import { LtfooterComponent } from './ltfooter/ltfooter.component';
import { LtJsontocsPageComponent } from './lt-jsontocs-page/lt-jsontocs-page.component';
import { LtJsontoxmlPageComponent } from './lt-jsontoxml-page/lt-jsontoxml-page.component'
import { LtXmltojsonComponent } from './lt-xmltojson/lt-xmltojson.component';
import { LtXmltocsComponent } from './lt-xmltocs/lt-xmltocs.component';
import { LtHomeComponent } from './lt-home/lt-home.component';
import { LtSpliteditorComponent } from './lt-spliteditor/lt-spliteditor.component';
import { LtJsontocsControllerComponent } from './lt-jsontocs-controller/lt-jsontocs-controller.component';
import { HttpClientModule } from '@angular/common/http';
import { LtJsontoxmlControllerComponent } from './lt-jsontoxml-controller/lt-jsontoxml-controller.component';
import { LtXmltojsonControllerComponent } from './lt-xmltojson-controller/lt-xmltojson-controller.component';
import { LtXmltocsControllerComponent } from './lt-xmltocs-controller/lt-xmltocs-controller.component';

@NgModule({
  declarations: [
    AppComponent,
    LtnavpanelComponent,
    LtfooterComponent,
    LtJsontocsPageComponent,
    LtJsontoxmlPageComponent,
    LtXmltojsonComponent,
    LtXmltocsComponent,
    LtHomeComponent,
    LtSpliteditorComponent,
    LtJsontocsControllerComponent,
    LtJsontoxmlControllerComponent,
    LtXmltojsonControllerComponent,
    LtXmltocsControllerComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatExpansionModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,

    AngularSplitModule,
    AceEditorModule,
    NgxWatermarkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
