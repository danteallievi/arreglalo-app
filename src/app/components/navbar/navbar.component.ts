import { Component } from "@angular/core";

@Component({
  selector: "arreglalo-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent {
  isOpen: boolean = true;

  toggleNavbar() {
    this.isOpen = !this.isOpen;
  }
}
