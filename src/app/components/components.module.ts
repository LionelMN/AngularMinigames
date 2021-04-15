import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RockpaperscizorComponent } from './rockpaperscizor/rockpaperscizor.component';



@NgModule({
  declarations: [RockpaperscizorComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  exports : [
    RockpaperscizorComponent
  ]
})
export class ComponentsModule { }
