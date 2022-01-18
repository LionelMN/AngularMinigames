import { Component, OnInit } from '@angular/core';
import { Dice } from '../../utils/Dice/Dice';
import { OcaBoard } from '../../utils/Board/OcaBoard';
import { OcaPlayer } from '../../utils/Player/OcaPlayer';


@Component({
  selector: 'app-oca',
  templateUrl: './oca.component.html',
  styleUrls: ['./oca.component.scss']
})
export class OcaComponent implements OnInit {

  public dice : Dice;
  public board : OcaBoard;
  public players : OcaPlayer[] = [];

  public isGameStarted : boolean = false;
  public activePlayer : OcaPlayer;

  constructor() { }

  ngOnInit(): void {
    this.dice = new Dice();
    this.board = new OcaBoard();
  }

  public startGame(numberOfPlayers : number){
    this.initilizePlayers(numberOfPlayers);
    this.activePlayer = this.players[0]
    this.isGameStarted = true;
  }

  private initilizePlayers(form : any) : void{
    for(let i = 0; i < form.numPlayers; i++){
      let color : String = this.pickName(form[Object.keys(form)[i+1]])
      this.players.push(new OcaPlayer(color));
    }
    console.log(this.players)
  }

  private pickName(name : String) : String{
    return name;
  }

  public simulateThrow() : void{
    this.dice.throwDice();
  }

  public avance(avance : number) :void{
    this.activePlayer.moveChip(avance);
    this.changeActivePlayer();
  }

  private changeActivePlayer() : void {
    if(this.activePlayer.getNumber() + 1 <= this.players.length){
      this.activePlayer = this.players[this.activePlayer.getNumber()];
    } else {
      this.activePlayer = this.players[0];
    }
    this.dice.setFace(0);
  }

}
