import { Component, OnInit } from '@angular/core';
import { Recepie } from '../recepie';
import {RecepieService} from '../recepie.service'
import {Routes} from '@angular/router';

@Component({
  selector: 'rb-recepie-list',
  templateUrl: './recepie-list.component.html',
})
export class RecepieListComponent implements OnInit {
  recepies: Recepie[] = [];

  //recepie = new Recepie('Dummy','Dummy','https://static.turbosquid.com/Preview/2014/05/21__03_48_03/dummy_1.jpg73a34682-6a0e-42f8-bbeb-b21eaa495913Original.jpg');
  constructor(private recipeService: RecepieService) { }

  ngOnInit() {
    this.recepies = this.recipeService.getRecepeie();
    this.recipeService.recepiesChanged.subscribe(
      (recepie: Recepie[]) => this.recepies = recepie
    );
  }


}
