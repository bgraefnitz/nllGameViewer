import { Component, OnInit, Input } from '@angular/core';
import { Player } from '@angular/core/src/render3/interfaces/player';

@Component({
  selector: 'app-box-score',
  templateUrl: './box-score.component.html',
  styleUrls: ['./box-score.component.css']
})
export class BoxScoreComponent implements OnInit {
  @Input() playerData: Array<Player>;

  constructor() { }

  ngOnInit() {
  }

}
