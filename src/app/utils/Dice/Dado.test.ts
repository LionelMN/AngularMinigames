import { Dice } from './Dice';

class testDice{

  private dice : Dice;
  private passed : boolean;

  constructor(){
    this.dice = new Dice();
    this.passed = true;
  }

  private testTirardice() : void {
    for(let i : number = 0; i < 100; i++){
      this.dice.throwDice();
      if(this.dice.getFace() < 1 || this.dice.getFace() > 6){
        this.passed = false;
        break;
      }
    }
  }

}
