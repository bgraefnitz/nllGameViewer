import { Component, OnInit, Input } from '@angular/core';
import { IGameEvent } from '../model/gameEvent';

@Component({
  selector: 'app-play-by-play',
  templateUrl: './play-by-play.component.html',
  styleUrls: ['./play-by-play.component.css']
})
export class PlayByPlayComponent implements OnInit {
  @Input() gameEvents: Array<IGameEvent>;

  constructor() { }

  ngOnInit() {
  }

}
