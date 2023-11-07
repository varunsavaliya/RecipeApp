import { Component, Input } from '@angular/core';
import { RecipeByIdService } from 'src/app/core/apiservices/recipe-by-id.service';
import { RecipeListService } from 'src/app/core/apiservices/recipe-list.service';

@Component({
  selector: 'app-best-recipe',
  templateUrl: './best-recipe.component.html',
  styleUrls: ['./best-recipe.component.css']
})
export class BestRecipeComponent {
  @Input() title!: string;
  recipies: any[] = [];
  showLoader: boolean = true;
  constructor(private recipeListService: RecipeListService) { }

  ngOnInit() {
    this.recipeListService.getRecipeList('pizza', '5-6', 'balanced', 'REGULAR', true).subscribe({
      next: (response: any) => {

        let count = 0;
        response.hits.forEach((element: any) => {
          if (element.recipe.images.REGULAR && count < 3) {
            this.recipies.push(element);
            count++;
          }
          this.showLoader= false;
        });
      }
    })
  }

}
