import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './views/home/home.component';
import {CatComponent} from './views/cat/cat.component';
import {FormComponent} from './views/form/form.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'cat', component: CatComponent},
  {path: 'form', component: FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
