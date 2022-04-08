import { ChipsModule } from 'primeng/chips';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';
import { AccordionModule } from 'primeng/accordion';
import { InputTextModule } from 'primeng/inputtext';

const primeModules = [
  AccordionModule,
  ButtonModule,
  ChipsModule,
  InputTextModule,
  InputMaskModule,
];

@NgModule({
  declarations: [],
  imports: [...primeModules],
  exports: [...primeModules],
})
export class PrimeModules {}
