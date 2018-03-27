import { Component } from '@angular/core';
import {RecepieService} from './recepies/recepie.service'
import {Http,HttpModule} from '@angular/http';

@Component({
  selector: 'rb-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent{

  constructor(private rs:RecepieService){}

  onStore()
  {
    this.rs.storeData().subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }

  onFetch()
  {
    this.rs.fetchData();
  }

}
