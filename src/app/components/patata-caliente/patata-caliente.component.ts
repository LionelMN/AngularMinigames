import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patata-caliente',
  templateUrl: './patata-caliente.component.html',
  styleUrls: ['./patata-caliente.component.scss']
})
export class PatataCalienteComponent implements OnInit {

  public breathingAnimation : String = "";

  public timer : number;
  public turn : number;
  private players : String[] = [];
  public currentPlayer : String;
  public isGameRunning : boolean;
  public isGameReady : boolean;
  public isGameOver : boolean;
  public numberA : number;
  public numberB : number;
  private solution : number;

  constructor() { }

  ngOnInit(): void {
    this.timer = 0;
    this.isGameRunning = false;
    this.isGameReady = false;
    this.isGameOver = false;
  }

  public setTime(time : number) : void {
    this.timer = time;
  }

  public startGame() : void {
    if(this.timer === 0){
      this.setTime(120);
    }
    this.breathingAnimation = `breathing infinite 1s, burning infinite ${this.timer}s`;
    this.isGameRunning = true;
    this.turn = 1;
    this.currentPlayer = this.players[0];
    this.initializeTimerCountdown();
    this.generateOpperation()
  }

  private initializeTimerCountdown() : void {
    let timerDecrease;
    clearInterval(timerDecrease);
    timerDecrease = setInterval(() => {
      this.timer --;
      if (this.timer == 0){
        clearInterval(timerDecrease);
        this.gameOver()
      }
    }, 1000)
  }

  public addPlayer(playerName : String) : void {
    if(playerName){
      this.players.push(playerName);
    }
    if(this.players.length > 1){
      this.isGameReady = true;
    }
  }

  public deletePlayer(playerName : String) : void {
    this.players = this.players.filter( player => player !== playerName)
    if(this.players.length < 2){
      this.isGameReady = false;
    }
  }

  public submitOperation(result : number) : void {
    if (result == this.solution){
      this.changeTurn();
    }
  }

  public changeTurn() : void {
    this.turn ++;
    if(this.currentPlayer == this.players[this.players.length - 1]){
      this.currentPlayer = this.players[0];
    } else {
      this.currentPlayer = this.players[this.players.indexOf(this.currentPlayer) + 1];
    }
    this.generateOpperation()
  }

  public generateOpperation() : void {
    this.numberA = Math.floor(Math.random() * 99 + 1);
    this.numberB = Math.floor(Math.random() * 99 + 1);
    this.solution = this.numberA + this.numberB;
  }

  private gameOver() : void {
    this.isGameOver = true;
  }

  public resetGame() : void {
    this.isGameOver = false;
    this.isGameRunning = false;
  }

}
