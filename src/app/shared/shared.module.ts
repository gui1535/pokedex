import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeHeaderComponent } from './poke-header/poke-header.component';



@NgModule({
  declarations: [
    PokeHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PokeHeaderComponent
  ]
})
export class SharedModule { }
