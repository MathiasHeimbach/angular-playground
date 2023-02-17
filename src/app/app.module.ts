import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter';

@NgModule({
  imports: [
    BrowserModule,
    StoreModule.forRoot({ counter: counterReducer }),
    AppComponent,
    RouterModule.forRoot([]),
  ],
  declarations: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
