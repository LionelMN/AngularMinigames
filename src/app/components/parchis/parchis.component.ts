import { Component, OnInit } from '@angular/core';
import { Dice } from '../../utils/Dice/Dice'
import { Board } from '../../utils/Board/Board';
import { Player } from '../../utils/Player/Player';

@Component({
  selector: 'app-parchis',
  templateUrl: './parchis.component.html',
  styleUrls: ['./parchis.component.scss']
})

export class ParchisComponent implements OnInit {

  public dice : Dice;
  public board : Board;
  public players : Player[] = [];

  public isGameStarted : boolean = false;
  public isSelectionChip : boolean = false;
  public activePlayer : Player;

  constructor() { }

  ngOnInit(): void {
    this.dice = new Dice();
    this.board = new Board();
  }

  public startGame(numberOfPlayers : number){
    this.initilizePlayers(numberOfPlayers);
    this.activePlayer = this.players[0]
    this.isGameStarted = true;
  }

  private initilizePlayers(form : any) : void{
    for(let i = 0; i < form.numPlayers; i++){
      let color : String = this.pickColor(form[Object.keys(form)[i+1]])
      this.players.push(new Player(color));
    }
  }

  private pickColor(color : String) : String{
    return color;
  }

  public simulateThrow() : void{
    this.dice.throwDice();
    this.isSelectionChip = true;
  }

  public avance(whichChip : number, avance : number) :void{
    this.activePlayer.moveChip(whichChip, avance)
    this.isSelectionChip = false;
  }

  public goOutHome(whichChip : number){
    this.activePlayer.putChipOutHome(whichChip);
    this.isSelectionChip = false;
    if(this.activePlayer.getNumber() + 1 <= this.players.length){
      this.activePlayer = this.players[this.activePlayer.getNumber()];
    } else {
      this.activePlayer = this.players[0];
    }
  }

}
