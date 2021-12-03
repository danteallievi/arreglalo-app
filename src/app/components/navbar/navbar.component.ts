import { Component } from "@angular/core";
import { AuthService } from "src/app/core/services/auth/auth.service";

@Component({
  selector: "arreglalo-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent {
  isOpen: boolean = true;

  constructor(public authService: AuthService) {}

  toggleNavbar() {
    this.isOpen = !this.isOpen;
  }

  logOutUser() {
    this.authService.removeUserToken();
  }
}
