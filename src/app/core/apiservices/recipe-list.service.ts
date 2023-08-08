import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecipeListService {
  private ApiUrl : string = environment.edamamBaseApiUrl;
  private apiKey = environment.edamamApiKey;
  private appId = environment.edamamAppId;
  constructor(private http: HttpClient) { }
  getRecipeList(queryText: string, ingrRange: string, diet: string, imageSize: string, isRandom: boolean):Observable<any>{
    const params = new HttpParams()
    .set('app_key', this.apiKey)
    .set('app_id', this.appId)
    .set('q', queryText)
    .set('type','public')
    .set('ingr',ingrRange)
    .set('diet',diet)
    .set('imageSize',imageSize)
    .set('random',isRandom)
    return this.http.get<any>(this.ApiUrl, {params});
  }
}
