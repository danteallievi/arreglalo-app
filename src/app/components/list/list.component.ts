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
}
