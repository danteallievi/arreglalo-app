import { Injectable } from "@angular/core";
import { BehaviorSubject, switchMap } from "rxjs";
import { ArreglaloService } from "../arreglalo/arreglalo.service";

@Injectable({
  providedIn: "root",
})
export class StoreService {
  public professionals$ = new BehaviorSubject<{}>({});
  public professionalsSubject$ = this.professionals$.pipe(
    switchMap(() => this.printProfessional())
  );

  public constructor(private arreglaloService: ArreglaloService) {}

  private printProfessional() {
    return this.arreglaloService.getProfessionals();
  }
}
