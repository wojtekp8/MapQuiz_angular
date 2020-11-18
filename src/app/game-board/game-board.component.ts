import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit {
  lat = 51.990000;
  lng = 19.239267;
  zoom = 6.09;
  constructor() { }

  ngOnInit(): void {
  }

}
