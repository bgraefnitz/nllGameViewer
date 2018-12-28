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
  constructor(private gameDataService: GameDataService) {
  }

  ngOnInit() {
    this.gameDataService.getGameData().subscribe(data => { this.gameData = data; });
  }
}
