import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AuthService } from "src/app/core/services/auth/auth.service";

@Component({
  selector: "arreglalo-visited-user",
  templateUrl: "./visited-user.component.html",
  styleUrls: ["./visited-user.component.css"],
})
export class VisitedUserComponent implements OnInit {
  isVisitedProfile: boolean = false;
  userIdToDisplay: string = this.localUser.getUserId();

  constructor(public route: ActivatedRoute, public localUser: AuthService) {}

  ngOnInit(): void {
    this.getProfessionalToVisit();
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
