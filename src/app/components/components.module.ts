import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RockpaperscizorComponent } from './rockpaperscizor/rockpaperscizor.component';
import { HangmanComponent } from './hangman/hangman.component';



@NgModule({
  declarations: [RockpaperscizorComponent, HangmanComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  exports : [
    RockpaperscizorComponent,
    HangmanComponent
  ]
})
export class ComponentsModule { }
