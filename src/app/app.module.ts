import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { RecepiesComponent } from './recepies/recepies.component';
import { RecepieListComponent } from './recepies/recepie-list/recepie-list.component';
import { RecepieItemComponent } from './recepies/recepie-list/recepie-item.component';
import { RecepieDetailComponent } from './recepies/recepie-detail/recepie-detail.component';
import {Ingridients} from './recepies/ingridients';
import {Recepie} from './recepies/recepie';
import { DropdownDirective } from './dropdown.directive';
import { ShoppingListComponent } from '../app/shopping-list/shopping-list.component';
import { ShoppingListAddComponent } from '../app/shopping-list/shopping-list-add.component';
import {RecepieService} from './recepies/recepie.service';
import {ShoppingListService} from './shopping-list/shopping-list.service';
import {routing} from './app.routes';
import { RecepieStartComponent } from './recepies/recepie-start.component';
import { RecepieEditComponent } from './recepies/recepie-edit/recepie-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecepiesComponent,
    RecepieListComponent,
    RecepieItemComponent,
    RecepieDetailComponent,
    DropdownDirective,
    ShoppingListComponent,
    ShoppingListAddComponent,
    RecepieStartComponent,
    RecepieEditComponent
  ],
  imports: [
    BrowserModule,routing,
    FormsModule, // For template-driven approach
    ReactiveFormsModule, // For data-driven approach
    HttpModule
  ],
  providers: [RecepieService,ShoppingListService,HttpModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
