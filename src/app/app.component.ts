import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ConfigService } from './config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ConvertorApp';

  constructor( private config: ConfigService ){
    this.config.showConfig();
  }
}
