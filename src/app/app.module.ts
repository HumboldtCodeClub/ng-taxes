import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { TaxesModule } from './taxes/taxes.module';
import { AppComponent } from './app.component';
import { appRouting } from './app-routing.module';
import { TaxBracketsComponent } from './taxes/tax-brackets/tax-brackets.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    TaxesModule,
    appRouting
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
