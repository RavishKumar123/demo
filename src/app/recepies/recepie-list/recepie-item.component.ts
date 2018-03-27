import { Component,Input } from '@angular/core';
import { Recepie } from '../recepie';

@Component({
  selector: 'rb-recepie-item',
  templateUrl: './recepie-item.component.html',
})
export class RecepieItemComponent {
  //@Input() recepie: Recepie;
   @Input() recepie: Recepie;
   @Input() recepieId: number;

}
