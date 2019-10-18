import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatCardModule, MatProgressSpinnerModule, MatInputModule, MatButtonModule } from '@angular/material';
@NgModule({
  exports: [
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatButtonModule
  ] 
})
export class SharedModule { }