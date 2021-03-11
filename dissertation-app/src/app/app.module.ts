import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslationComponent } from './translation/translation.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component'

@NgModule({
  declarations: [AppComponent, HomescreenComponent, TranslationComponent, LeaderboardComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
