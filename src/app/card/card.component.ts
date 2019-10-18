import { Component, Input, SimpleChanges } from '@angular/core';
import { ApiService, Irepos } from '../api.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  constructor(private api: ApiService) { }

  @Input()
  public nameRepos: string;

  public showSpinner = false;
  public repos: any;
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['nameRepos'] && this.nameRepos != null) {
      console.log(this.nameRepos);
      this.showSpinner = true;
      this.api.getRepos(this.nameRepos)
        .subscribe((result) => {
          this.repos = result.items;
          this.showSpinner = false;
        });
    }
  }

}
