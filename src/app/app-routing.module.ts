import { RouterModule, Routes } from '@angular/router';

import { TaxBracketsComponent } from './taxes/tax-brackets/tax-brackets.component';
import { GopTaxReformComponent } from './taxes/gop-tax-reform/gop-tax-reform.component';
import { IncomeToolComponent } from './taxes/income-tool/income-tool.component';

/**
 * App Routing Module
 */

const routes: Routes = [
  { path: 'tax-brackets', component: TaxBracketsComponent },
  { path: 'tcja', component: GopTaxReformComponent },
  { path: 'income', component: IncomeToolComponent },
  { path: '**', redirectTo: 'tax-brackets' }
];

export const appRouting = RouterModule.forRoot(routes);
