import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomescreenComponent} from './homescreen/homescreen.component'
import {TranslationComponent} from './translation/translation.component'


const routes: Routes = [
  { path: 'translation-component', component: TranslationComponent},
  { path: '', component: HomescreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
