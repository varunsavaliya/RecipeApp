import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/shared/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'recipe', loadChildren: () => import('./recipe/recipe.module').then(m => m.RecipeModule) },
  { path: 'connect', loadChildren: () => import('./connect/connect.module').then(m => m.ConnectModule) },
  // { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: '**', component:PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
