import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router){}
  searchTerm(searchTerm: string){
    console.log('Search term:', searchTerm);
    if(searchTerm == ''){
      this.router.navigate(['']);
    }
    else{
      this.router.navigate(['/recipe','recipe-list',{searchTerm:searchTerm}]);
    }
  }
}
