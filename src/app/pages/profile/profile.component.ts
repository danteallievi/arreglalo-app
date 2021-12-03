import { Component } from "@angular/core";

@Component({
  selector: "arreglalo-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent {
  userData = {
    id: "",
    name: "",
    surname: "",
    email: "",
  };
}
