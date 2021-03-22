import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LetsStartComponent} from './lets-start/lets-start.component';
import {KeepInTouchComponent} from './keep-in-touch/keep-in-touch.component';

const routes: Routes = [
  {path: '', component: LetsStartComponent},
  {path: 'keep-in-touch', component: KeepInTouchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
