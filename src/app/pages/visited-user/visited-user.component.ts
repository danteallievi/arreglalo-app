import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import jwtDecode from "jwt-decode";

import { LocalUser } from "src/app/core/models/User";

@Component({
  selector: "arreglalo-visited-user",
  templateUrl: "./visited-user.component.html",
  styleUrls: ["./visited-user.component.css"],
})
export class VisitedUserComponent implements OnInit {
  isVisitedProfile: boolean = false;
  userIdToDisplay: string = this.getUserId();

  constructor(public route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getProfessionalToVisit();
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

  getProfessionalToVisit(): string | null {
    const professionalId = this.route.snapshot.paramMap.get("id");
    if (professionalId) {
      this.isVisitedProfile = true;
      this.userIdToDisplay = professionalId;
      return professionalId;
    }
    this.isVisitedProfile = false;
    return null;
  }
}
