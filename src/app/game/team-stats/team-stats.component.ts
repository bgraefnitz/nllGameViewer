import { Component, OnInit, Input } from '@angular/core';
import { ITeam } from '../model/team';

@Component({
  selector: 'app-team-stats',
  templateUrl: './team-stats.component.html',
  styleUrls: ['./team-stats.component.css']
})
export class TeamStatsComponent implements OnInit {
  @Input() awayTeam: ITeam;
  @Input() homeTeam: ITeam;

  constructor() { }

  ngOnInit() {
  }

}
