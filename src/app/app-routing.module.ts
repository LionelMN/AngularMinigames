import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RockpaperscizorComponent } from './components/rockpaperscizor/rockpaperscizor.component';
import { HangmanComponent } from './components/hangman/hangman.component';
import { TictactoeComponent } from './components/tictactoe/tictactoe.component';

const routes: Routes = [
  {path: 'rockPaperScissors', component: RockpaperscizorComponent},
  {path: 'hangman', component: HangmanComponent},
  {path: 'tictactoe', component: TictactoeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
