import { Component, AfterViewInit } from "@angular/core";
import { Router } from "@angular/router";
import { StoreService } from "src/app/core/services/store/store.service";
import { calculateUserAge } from "src/app/utils/calculateUserAge";

@Component({
  selector: "arreglalo-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
})
export class ListComponent implements AfterViewInit {
  professionals$ = this.storeService.professionals$;

  constructor(public storeService: StoreService, public router: Router) {}

  ngAfterViewInit() {
    this.professionals$.next({});
  }

  calculateUserAge(yearOfBirth: Date) {
    return calculateUserAge(yearOfBirth);
  }

  handleCardClick(id: string) {
    this.router.navigate(["/detail/", id]);
  }
}
