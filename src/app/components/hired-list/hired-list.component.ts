import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { StoreService } from "src/app/core/services/store/store.service";

import { calculateUserAge } from "../../utils/calculateUserAge";

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

  calculateUserAge(birthday: Date) {
    return calculateUserAge(birthday);
  }

  handleCardClick(id: string) {
    this.router.navigate(["/detail/", id]);
  }
}
