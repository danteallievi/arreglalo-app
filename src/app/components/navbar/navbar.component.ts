import { Component } from "@angular/core";
import { PublicMethodsService } from "src/app/core/services/methods/public-methods.service";

@Component({
  selector: "arreglalo-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent {
  isOpen: boolean = true;

  constructor(public publicMethods: PublicMethodsService) {}

  toggleNavbar() {
    this.isOpen = !this.isOpen;
  }

  logOutUser() {
    this.publicMethods.removeUserToken();
  }
}
