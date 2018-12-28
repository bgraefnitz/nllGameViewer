import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { PlayByPlayComponent } from './game/play-by-play/play-by-play.component';
import { BoxScoreComponent } from './game/box-score/box-score.component';
import { LineupsComponent } from './game/lineups/lineups.component';
import { TeamStatsComponent } from './game/team-stats/team-stats.component';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    PlayByPlayComponent,
    BoxScoreComponent,
    LineupsComponent,
    TeamStatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
