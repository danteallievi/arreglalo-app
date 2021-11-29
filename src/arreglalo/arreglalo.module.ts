import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { ArreglaloRoutingModule } from "./arreglalo-routing.module";
import { AppComponent } from "./arreglalo.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ArreglaloRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class ArreglaloModule {}
