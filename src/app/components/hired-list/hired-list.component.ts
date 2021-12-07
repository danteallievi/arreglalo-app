import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { StoreService } from "src/app/core/services/store/store.service";

@Component({
  selector: "arreglalo-hired-list",
  templateUrl: "./hired-list.component.html",
  styleUrls: ["./hired-list.component.css"],
})
export class HiredListComponent implements OnInit {
  currentClientProfessionals$ = this.storeService.currentClientProfessionals$;
  currentClientProfessionalsSubject$ =
    this.storeService.currentClientProfessionalsSubject$;

  myProfessionalsHired: any[] = [];

  constructor(public storeService: StoreService, public router: Router) {}

  ngOnInit(): void {
    this.currentClientProfessionalsSubject$.subscribe((data) => {
      this.myProfessionalsHired = data.professionals;
    });
  }

  calculateUserAge(yearOfBirth: Date) {
    const today = new Date();
    const birthDate = new Date(yearOfBirth);
    const month = today.getMonth() - birthDate.getMonth();
    let age = today.getFullYear() - birthDate.getFullYear();

    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age -= 1;
    }
    return age;
  }

  handleCardClick(id: string) {
    this.router.navigate(["/detail/", id]);
  }
}
