import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatInputModule,
  MatSelectModule,
  MatCardModule,
  MatGridListModule,
  MatButtonModule,
  MatListModule,
  MatDividerModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { EditComponent } from './edit/edit.component';
import { PreviewComponent } from './preview/preview.component';

@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    PreviewComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule
  ],
  exports: [
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
