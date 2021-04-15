import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-rockpaperscizor',
  templateUrl: './rockpaperscizor.component.html',
  styleUrls: ['./rockpaperscizor.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(':enter',
          [
            style({opacity : 0}),
            animate('1s ease-out', style({opacity : 1}))
          ]
        ),
        transition(':leave',
          [
            style({opacity: 1 }),
            animate('1s ease-in', style({opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class RockpaperscizorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  private selections : string[] = ['rock', 'paper', 'scissors'];
  public gameInfo : string;
  public wins : number = 0;
  public draws : number = 0;
  public looses : number = 0;

  select(selection){
    let iaSelection = this.getRndInteger(0, 3);
    let result : string;
    if (selection === iaSelection) {
      result = "draw";
      this.draws ++;
    } else {
      if (selection === 0 && iaSelection === 2 || selection === 1 && iaSelection === 0 || selection === 2 && iaSelection === 1) {
        result = "win";
        this.wins ++;
      } else {
        result = "lose";
        this.looses ++;
      }
    }
    this.gameInfo = `<p> Your selection is ${this.selections[selection]} and the IA choose ${this.selections[iaSelection]}. It's a....:</p>
    <p class= 'result ${result}'>${result}</p>
    <div class='match'>
      <div class="selectButton ${this.selections[selection]}"><img src="assets/rockpaperscissors/${selection}.png" alt="${this.selections[selection]}"></div>
      <div class="selectButton ${this.selections[iaSelection]}"><img src="assets/rockpaperscissors/${iaSelection}.png" alt="${this.selections[iaSelection]}"></div>
    </div>`;
  }

  public getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

}
