import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RockpaperscizorComponent } from './rockpaperscizor/rockpaperscizor.component';
import { HangmanComponent } from './hangman/hangman.component';
import { TictactoeComponent } from './tictactoe/tictactoe.component';



@NgModule({
  declarations: [RockpaperscizorComponent, HangmanComponent, TictactoeComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  exports : [
    RockpaperscizorComponent,
    HangmanComponent,
    TictactoeComponent
  ]
})
export class ComponentsModule { }
