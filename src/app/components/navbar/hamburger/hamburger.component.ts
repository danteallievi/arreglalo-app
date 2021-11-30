import { Component, Output, EventEmitter, Input } from "@angular/core";

@Component({
  selector: "arreglalo-hamburger",
  templateUrl: "./hamburger.component.html",
  styleUrls: ["./hamburger.component.css"],
})
export class HamburgerComponent {
  @Output() hamburgerClick = new EventEmitter<void>();
  @Input() hamburgerIsOpen?: boolean;

  hamburgerOnClick() {
    this.hamburgerIsOpen = !this.hamburgerIsOpen;
    this.hamburgerClick.emit();
  }
}
