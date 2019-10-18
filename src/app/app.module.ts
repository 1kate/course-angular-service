import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ApiService } from './api.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
