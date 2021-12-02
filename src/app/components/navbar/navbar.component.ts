import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "arreglalo-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent {
  isOpen: boolean = true;

  constructor(private router: Router) {}

  toggleNavbar() {
    this.isOpen = !this.isOpen;
  }

  logOutUser() {
    localStorage.removeItem("user");
    this.router.navigate(["/landing"]);
  }
}
