// import jwtDecode from "jwt-decode";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "arreglalo-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {
  userData = {
    id: "",
    name: "",
    surname: "",
    email: "",
  };

  ngOnInit(): void {
    // const userLogged = localStorage.getItem("user")
    //   ? JSON.parse(localStorage.getItem("user") || "")
    //   : "";
    // if (userLogged) {
    //   this.userData = jwtDecode(userLogged);
    // }
  }
}
