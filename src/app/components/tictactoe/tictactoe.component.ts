import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tictactoe',
  templateUrl: './tictactoe.component.html',
  styleUrls: ['./tictactoe.component.scss']
})
export class TictactoeComponent implements OnInit {

  constructor() { }
  public player : string = "X";
  public cells : string[] = ["1","2","3","4","5","6","7","8","9"];
  public isGameOver : boolean = false;

  ngOnInit(): void {
  }

  setValue(cell){
    if (this.cells[cell] !== "X" && this.cells[cell] !== "O" && !this.isGameOver){
      if(this.player === "X"){
        this.cells[cell] = "X"
        this.player = "O"
      } else {
        this.cells[cell] = "O"
        this.player = "X"
      }
      this.win()
    }
  }

  private win(){
    if(this.cells[0] === this.cells[1] && this.cells[0] === this.cells[2] ||
      this.cells[0] === this.cells[3] && this.cells[0] === this.cells[6] ||
      this.cells[0] === this.cells[4] && this.cells[0] === this.cells[8] ||
      this.cells[1] === this.cells[4] && this.cells[1] === this.cells[7] ||
      this.cells[2] === this.cells[4] && this.cells[2] === this.cells[6] ||
      this.cells[2] === this.cells[5] && this.cells[2] === this.cells[8] ||
      this.cells[3] === this.cells[4] && this.cells[3] === this.cells[5]){
      if(this.player === "X"){
        this.player = "O"
      } else {
        this.player = "X"
      }
      this.isGameOver = true;
    }
  }

  public reset(){
    this.player = "X";
    this.cells = ["1","2","3","4","5","6","7","8","9"];
    this.isGameOver = false;

  }

}
