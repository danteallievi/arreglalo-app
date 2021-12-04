import { Component, AfterViewInit } from "@angular/core";
import { StoreService } from "src/app/core/services/store/store.service";

@Component({
  selector: "arreglalo-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
})
export class ListComponent implements AfterViewInit {
  professionals$ = this.storeService.professionals$;

  constructor(public storeService: StoreService) {}

  ngAfterViewInit() {
    this.professionals$.next({});
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
}
