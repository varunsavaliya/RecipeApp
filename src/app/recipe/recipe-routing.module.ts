import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipePageComponent } from './recipe-page/recipe-page.component';

const routes: Routes = [
  { path: 'single', component: RecipePageComponent },
  { path: 'recipe-list', component: RecipeListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeRoutingModule { }
