import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CoreModule } from '../core/core.module';
import { HeroSliderComponent } from './landing-page/hero-slider/hero-slider.component';
import { TopCategoryComponent } from './landing-page/top-category/top-category.component';
import { BestRecipeComponent } from './landing-page/best-recipe/best-recipe.component';
import { SubscribeComponent } from './landing-page/subscribe/subscribe.component';
import { FeaturesComponent } from './landing-page/features/features.component';


@NgModule({
  declarations: [
    HomeComponent,
    LandingPageComponent,
    HeroSliderComponent,
    TopCategoryComponent,
    BestRecipeComponent,
    SubscribeComponent,
    FeaturesComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
