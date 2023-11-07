import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeRoutingModule } from './recipe-routing.module';
import { RecipeComponent } from './recipe.component';
import { CoreModule } from '../core/core.module';
import { RecipePageComponent } from './recipe-page/recipe-page.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';


@NgModule({
  declarations: [
    RecipeComponent,
    RecipePageComponent,
    RecipeListComponent
  ],
  imports: [
    CommonModule,
    RecipeRoutingModule,
    CoreModule
  ]
})
export class RecipeModule { }
