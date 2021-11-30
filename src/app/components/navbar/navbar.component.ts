import { Component } from "@angular/core";

@Component({
  selector: "arreglalo-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent {
  isOpen: boolean = false;

  toggleNavbar() {
    this.isOpen = !this.isOpen;
  }
}
