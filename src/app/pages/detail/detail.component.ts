import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/core/services/auth/auth.service";
import { PublicMethodsService } from "src/app/core/services/methods/public-methods.service";

import { StoreService } from "src/app/core/services/store/store.service";

@Component({
  selector: "arreglalo-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.css"],
})
export class DetailComponent implements OnInit {
  currentProfessional$ = this.storeService.currentProfessional$;
  myProf: any;

  constructor(
    public storeService: StoreService,
    public router: Router,
    public publicMethods: PublicMethodsService,
    public authMethods: AuthService
  ) {}

  ngOnInit() {
    this.storeService.currentProfessionalSubject$.subscribe({
      next: (data) => {
        this.myProf = data;
      },
    });
  }

  deleteProfile() {
    this.publicMethods.deleteProfessionalProfile().subscribe({
      next: () => {
        this.authMethods.removeUserToken();
        this.router.navigate(["/landing"]);
      },
    });
  }
}
