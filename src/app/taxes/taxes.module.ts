import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaxBracketsComponent } from './tax-brackets/tax-brackets.component';
import { IncomeToolComponent } from './income-tool/income-tool.component';
import { GopTaxReformComponent } from './gop-tax-reform/gop-tax-reform.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TaxBracketsComponent, IncomeToolComponent, GopTaxReformComponent]
})
export class TaxesModule { }
