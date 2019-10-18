import { Component, Output } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public nameRepos: string;
  
  public output(event): void {
    this.nameRepos = event;
  }
}
