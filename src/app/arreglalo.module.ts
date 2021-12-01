import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { ArreglaloRoutingModule } from "./arreglalo-routing.module";
import { AppComponent } from "./arreglalo.component";
import { ButtonComponent } from "./components/button/button.component";
import { CardComponent } from "./components/card/card.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HamburgerComponent } from "./components/navbar/hamburger/hamburger.component";
import { LandingComponent } from "./pages/landing/landing.component";
import { RegisterComponent } from "./pages/register/register.component";
import { ListComponent } from "./components/list/list.component";

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    CardComponent,
    NavbarComponent,
    HamburgerComponent,
    LandingComponent,
    RegisterComponent,
    ListComponent,
  ],
  imports: [BrowserModule, ArreglaloRoutingModule, HttpClientModule],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class ArreglaloModule {}
