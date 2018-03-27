import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Http,HttpModule} from '@angular/http';

@Component({
  selector: 'rb-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'rb';
}
