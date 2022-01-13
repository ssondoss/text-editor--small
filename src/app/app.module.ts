import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherCComponent } from './weather-c/weather-c.component';
import { CToFComponent } from './c-to-f/c-to-f.component';
import { RepeatComponent } from './repeat/repeat.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherCComponent,
    CToFComponent,
    RepeatComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
