import { Component, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent{
  
  @Output() outputRepos = new EventEmitter<string>();
  
  public search(query: string){    
    this.outputRepos.emit(query);  
  };
}
 
