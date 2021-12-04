import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import jwtDecode from "jwt-decode";

import { IUser, LocalUser } from "../../models/User";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  currentUser?: LocalUser;

  constructor(private router: Router) {}

  getUserData() {
    const userLogged = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user") || "")
      : "";

    if (userLogged) {
      this.currentUser = jwtDecode(userLogged.token);
    }
    return this.currentUser;
  }

  getUserId() {
    const userLogged = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user") || "")
      : "";

    if (userLogged) {
      const user: LocalUser = jwtDecode(userLogged.token);
      return user.id;
    }
    return "";
  }

  setUserToken(user: IUser) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  getUserToken() {
    const userLogged = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user") || "")
      : "";

    if (userLogged) {
      return userLogged.token;
    }
    return null;
  }

  async removeUserToken() {
    await localStorage.removeItem("user");
    this.router.navigate(["/landing"]);
  }
}
