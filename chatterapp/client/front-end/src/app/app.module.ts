import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatCardModule } from '@angular/material';

import { AppComponent } from './app.component';
import { MessageBoard } from './messageboard.component';
import { NewMessage } from './newmessage.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatInputModule, MatFormFieldModule } from "@angular/material";
import { HttpModule } from "@angular/http";
import { WebServices } from './web.services';


@NgModule({
  declarations: [
    AppComponent,
    MessageBoard,
    NewMessage
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,
    MatCardModule,
    FormsModule, ReactiveFormsModule,
    MatInputModule, MatFormFieldModule,
    HttpModule
  ],
  providers: [
    WebServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
