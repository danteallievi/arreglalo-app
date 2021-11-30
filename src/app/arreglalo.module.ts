import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { ArreglaloRoutingModule } from "./arreglalo-routing.module";
import { AppComponent } from "./arreglalo.component";
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [AppComponent, ButtonComponent, CardComponent],
  imports: [BrowserModule, ArreglaloRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class ArreglaloModule {}
