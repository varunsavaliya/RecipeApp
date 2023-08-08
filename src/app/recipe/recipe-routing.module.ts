import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipePageComponent } from './recipe-page/recipe-page.component';

const routes: Routes = [
  { path: 'single', component: RecipePageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeRoutingModule { }
