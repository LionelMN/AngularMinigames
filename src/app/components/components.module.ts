import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RockpaperscizorComponent } from './rockpaperscizor/rockpaperscizor.component';
import { HangmanComponent } from './hangman/hangman.component';
import { TictactoeComponent } from './tictactoe/tictactoe.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RockpaperscizorComponent,
    HangmanComponent,
    TictactoeComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule
  ],
  exports : [
    NavbarComponent,
    RockpaperscizorComponent,
    HangmanComponent,
    TictactoeComponent,
  ]
})
export class ComponentsModule { }
