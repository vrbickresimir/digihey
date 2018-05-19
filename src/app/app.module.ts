import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {
  MatInputModule,
  MatSelectModule,
  MatCardModule,
  MatGridListModule,
  MatButtonModule,
  MatListModule,
  MatDividerModule,
  MatMenuModule,
  MatAutocompleteModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { EditComponent } from './edit/edit.component';
import { PreviewComponent } from './preview/preview.component';
import { AppService } from './app.service';
import { TransformerComponent } from './transformer/transformer.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    PreviewComponent,
    TransformerComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(routes), HttpClientModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    MatMenuModule,
    MatAutocompleteModule
  ],
  exports: [
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    MatMenuModule,
    MatAutocompleteModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
