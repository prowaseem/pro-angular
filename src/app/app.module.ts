import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// theme
import { ThemeModule } from './theme/theme.module';


// app components
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // theme
    ThemeModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
