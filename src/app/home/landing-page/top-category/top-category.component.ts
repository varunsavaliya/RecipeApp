import { Component } from '@angular/core';
import { RecipeByIdService } from 'src/app/core/apiservices/recipe-by-id.service';

@Component({
  selector: 'app-top-category',
  templateUrl: './top-category.component.html',
  styleUrls: ['./top-category.component.css']
})
export class TopCategoryComponent {

  recipes: any[] = [];

  constructor(private service: RecipeByIdService){}

  ngOnInit() {
    this.service.getRandomRecipes('pizza').subscribe({
      next: (response) => {
        let count = 0;
        response.hits.forEach((element: any) => {
          if (element.recipe.images.REGULAR && count < 2) {
            this.recipes.push(element);
            count++;
          }
        });
      },
      error: (error) => {
        console.error('Error fetching recipe data:', error);
      }
    });
  }
  
}
