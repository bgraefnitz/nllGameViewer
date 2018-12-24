import { Component, OnInit } from '@angular/core';
import { GameDataService } from './game-data.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  public gameData: any;
  public errorMessage: any;
  constructor(private gameDataService: GameDataService) {
  }

  ngOnInit() {
    this.gameDataService.getGameData().subscribe(gameData => this.gameData, error => this.errorMessage = <any>error);
  }

}
