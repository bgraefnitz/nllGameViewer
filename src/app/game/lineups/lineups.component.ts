import { Component, OnInit, Input } from '@angular/core';
import { ILineup } from '../model/lineup';

@Component({
  selector: 'app-lineups',
  templateUrl: './lineups.component.html',
  styleUrls: ['./lineups.component.css']
})
export class LineupsComponent implements OnInit {
  @Input() lineups: Array<ILineup>;

  constructor() { }

  ngOnInit() {
  }

}
