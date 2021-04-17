import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hangman',
  templateUrl: './hangman.component.html',
  styleUrls: ['./hangman.component.scss']
})
export class HangmanComponent implements OnInit {

  constructor() { }

  private GuessCollection : string[] = ["hola", "adios", "lorem", "qwertyuiop"];
  public guessWord : string;
  public wordSeparated : {letter : string, isRevealed : boolean}[] = [];
  public keyboard : {letter : string, isPressed : boolean}[] = [
    {letter: 'q', isPressed : false}, {letter: 'w', isPressed : false}, {letter: 'e', isPressed : false}, {letter: 'r', isPressed : false}, {letter: 't', isPressed : false}, {letter: 'y', isPressed : false}, {letter: 'u', isPressed : false}, {letter: 'i', isPressed : false}, {letter: 'o', isPressed : false}, {letter: 'p', isPressed : false}, {letter: 'a', isPressed : false}, {letter: 's', isPressed : false}, {letter: 'd', isPressed : false}, {letter: 'f', isPressed : false}, {letter: 'g', isPressed : false}, {letter: 'h', isPressed : false}, {letter: 'j', isPressed : false}, {letter: 'k', isPressed : false}, {letter: 'l', isPressed : false}, {letter: 'z', isPressed : false}, {letter: 'x', isPressed : false}, {letter: 'c', isPressed : false}, {letter: 'v', isPressed : false}, {letter: 'b', isPressed : false}, {letter: 'n', isPressed : false}, {letter: 'm', isPressed : false},
  ];
  public lifes : number = 10;
  private aciertos : number = 0;
  public result : string;

  ngOnInit(): void {
    this.prepareGame();
  }

  selectWord() :void {
    this.guessWord = this.GuessCollection[Math.floor(Math.random() * (this.GuessCollection.length - 0) ) + 0];
  }

  prepareGame() : void {
    this.selectWord();
    for (let i = 0; i < this.guessWord.length; i++) {
      let letter = { letter : this.guessWord[i],  isRevealed : false}
      this.wordSeparated.push(letter);
    }
  }

  reveal(letter : {letter : string, isRevealed : boolean}) : void {
    letter.isRevealed = true;
  }

  pressKey(key : {letter: string, isPressed: boolean}){
    if (key.isPressed === false){
      if (this.guessWord.includes(key.letter)){
        this.wordSeparated.map(letter => {
          if(letter.letter === key.letter){
            this.reveal(letter)
            this.aciertos ++;
          }
        })
        if (this.aciertos === this.guessWord.length){
          this.gameOver('win')
        }
      } else{
        this.lifes --;
        if (this.lifes === 0){
          this.gameOver('lose')
        }
      }
      key.isPressed = true;
    }
  }

  gameOver(result) :void{
    this.keyboard.map( key => key.isPressed = true);
    this.result = result
  }

  newGame(){
    this.aciertos = 0;
    this.result = "";
    this.lifes = 10;
    this.keyboard.map( key => key.isPressed = false);
    this.guessWord = "";
    this.wordSeparated = []
    this.prepareGame();
  }

}
