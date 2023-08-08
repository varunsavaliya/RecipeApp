import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeByIdService  {
  // private ApiUrl : string = environment.baseApiUrl  + 'recipes/random';
  // private apiKey1 = environment.apiKey1;
  // private apiKey2 = environment.apiKey2;

  private ApiUrl : string = environment.edamamBaseApiUrl;
  private apiKey = environment.edamamApiKey;
  private appId = environment.edamamAppId;
  constructor(private http: HttpClient) { }
  getRecipeByUri(uri: string):Observable<any>{
    const params = new HttpParams()
    .set('app_key', this.apiKey)
    .set('app_id', this.appId)
    .set('uri', uri)
    .set('type','public');
    console.log(uri);
    
    return this.http.get<any>(this.ApiUrl + '/by-uri', {params});
  }

  getRandomRecipes(query: string):Observable<any>{
    const params = new HttpParams()
    .set('app_key', this.apiKey)
    .set('app_id', this.appId)
    .set('type','public')
    .set('random',true)
    .set('q',query);
    
    return this.http.get<any>(this.ApiUrl, {params});
  }
}
