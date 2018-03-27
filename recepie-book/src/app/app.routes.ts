import { RouterModule,Routes } from '@angular/router';
import {RecepiesComponent} from './recepies/recepies.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RECEPIE_ROUTE} from './recepies/recepie.routes';



const APP_ROUTES: Routes = [
{path: '',       redirectTo: '/recepie',pathMatch: 'full'},
{path: 'recepie',component: RecepiesComponent,children:RECEPIE_ROUTE},
{path: 'Shopping',component:ShoppingListComponent}
];
export const routing = RouterModule.forRoot(APP_ROUTES);
