import { Component, OnInit } from '@angular/core';
import { GameDataService } from './game-data.service';
import { IGame } from './model/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  public gameData: IGame;
  private gameURL: string;
  constructor(private gameDataService: GameDataService) {
  }

  ngOnInit() {
    this.gameURL = decodeURIComponent(window.location.href.split('=')[1]);
    this.gameDataService.getGameData(this.gameURL).subscribe(data => { this.gameData = data; });
  }
}
