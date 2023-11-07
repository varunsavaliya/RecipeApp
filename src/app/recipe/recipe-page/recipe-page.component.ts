import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeByIdService } from 'src/app/core/apiservices/recipe-by-id.service';

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.css']
})
export class RecipePageComponent {
  showLoader: boolean = true;
  recipe:any;
  uri: any;
  constructor(private activeRoute: ActivatedRoute,private recipeService: RecipeByIdService){}
  
  ngOnInit(){
    this.activeRoute.paramMap.subscribe(params => {
      this.uri = params.get('uri')?.toString();
      this.recipeService.getRecipeByUri(this.uri).subscribe({
        next: (response) => {
          this.recipe = response.hits[0].recipe;
          this.showLoader = false;
        }
      })
    });
  }
}
