import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewquoteComponent } from './newquote/newquote.component';
import { DisquoteComponent } from './disquote/disquote.component';

@NgModule({
  declarations: [
    AppComponent,
    NewquoteComponent,
    DisquoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
