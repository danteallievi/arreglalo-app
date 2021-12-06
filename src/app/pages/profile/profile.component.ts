import { Component, OnInit } from "@angular/core";
import jwtDecode from "jwt-decode";

@Component({
  selector: "arreglalo-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {
  loggedUserData: any;

  ngOnInit() {
    this.checkLoggedUser();
  }

  checkLoggedUser() {
    const userLogged = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user") || "")
      : "";

    if (userLogged) {
      this.loggedUserData = jwtDecode(userLogged.token);
    }
  }
}
