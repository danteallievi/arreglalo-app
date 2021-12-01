import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { ArreglaloRoutingModule } from "./arreglalo-routing.module";
import { AppComponent } from "./arreglalo.component";
import { ButtonComponent } from "./components/button/button.component";
import { CardComponent } from "./components/card/card.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HamburgerComponent } from "./components/navbar/hamburger/hamburger.component";
import { ListComponent } from "./components/list/list.component";

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    CardComponent,
    NavbarComponent,
    HamburgerComponent,
    ListComponent,
  ],
  imports: [BrowserModule, ArreglaloRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class ArreglaloModule {}
