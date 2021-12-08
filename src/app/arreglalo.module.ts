import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";

import {
  FaIconLibrary,
  FontAwesomeModule,
} from "@fortawesome/angular-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";

import { ArreglaloRoutingModule } from "./arreglalo-routing.module";
import { AppComponent } from "./arreglalo.component";
import { ButtonComponent } from "./components/button/button.component";
import { CardComponent } from "./components/card/card.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HamburgerComponent } from "./components/navbar/hamburger/hamburger.component";
import { LandingComponent } from "./pages/landing/landing.component";
import { RegisterComponent } from "./pages/register/register.component";
import { ListComponent } from "./components/list/list.component";
import { LoginComponent } from "./pages/login/login.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { RegisterProfessionalComponent } from "./pages/register/register-professional/register-professional.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { DetailComponent } from "./components/detail/detail.component";
import { VisitedUserComponent } from "./pages/visited-user/visited-user.component";
import { HiredListComponent } from "./components/hired-list/hired-list.component";
import { StarsComponent } from "./components/stars/stars.component";

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
    LoginComponent,
    PageNotFoundComponent,
    RegisterProfessionalComponent,
    ProfileComponent,
    DetailComponent,
    VisitedUserComponent,
    HiredListComponent,
    StarsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ArreglaloRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class ArreglaloModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(faStar, faSpinner);
  }
}
