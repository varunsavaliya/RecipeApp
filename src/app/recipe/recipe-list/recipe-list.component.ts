import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeByIdService } from 'src/app/core/apiservices/recipe-by-id.service';
import { RecipeListService } from 'src/app/core/apiservices/recipe-list.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  showLoader: boolean = true;
  searchTerm: any;
  recipes: any[] = [];

  constructor(private router: Router, private activeRoute: ActivatedRoute, private service: RecipeListService) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(params => {
      this.searchTerm = params.get('searchTerm')?.toString();
      this.checkRoute();
      this.getSearchResults();
    });
  }

  ngOnChanges() {
    this.showLoader = true;
    this.checkRoute();
    this.getSearchResults();
  }

  checkRoute() {
    if (this.searchTerm == '') {
      this.router.navigate(['']);
    }
  }

  getSearchResults() {
    this.showLoader = true;
    this.recipes = [];
    this.service.getRecipeList(this.searchTerm, '5-10', 'balanced', 'REGULAR', true).subscribe({
      next: (response) => {
        let count = 0;
        this.recipes = [];
        const hits = response.hits;
        for (let i = 0; i < hits.length; i++) {
          if (count > 9) {
            break;
          }
          const element = hits[i];
          if (element.recipe.images.REGULAR && count < 9) {
            this.recipes.push(element);
            count++;
          }
        }
        this.showLoader = false;
      },
      error: (error) => {
        console.error('Error fetching recipe data:', error);
      }
    });

  }
}
