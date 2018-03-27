import { Component, OnInit } from '@angular/core';
import {Ingridients} from '../recepies/Ingridients'
import {ShoppingListService} from './shopping-list.service';
@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html',
})
export class ShoppingListComponent implements OnInit {
  items:Ingridients[] = [];
  selectedItem: Ingridients = null;
  constructor(private sls:ShoppingListService) { }

  ngOnInit() {
    this.items = this.sls.getItems();
  }
  onSelectedItem(item:Ingridients)
  {
  this.selectedItem = item;
  }
  oncleared()
  {this.selectedItem = null;

  }

}
