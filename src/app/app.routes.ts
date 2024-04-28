import { Routes } from '@angular/router';
import { PerspectiveViewComponent} from "./perspective-view/perspective-view.component";
import {SecondViewComponent} from "./second-view/second-view.component";


export const routes: Routes = [
  { path: '', component: PerspectiveViewComponent },
  { path: 'second', component: SecondViewComponent },
];
