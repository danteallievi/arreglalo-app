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

  public currentProfessional$ = new BehaviorSubject<{}>({});
  public currentProfessionalSubject$ = this.currentProfessional$.pipe(
    switchMap(() => this.printCurrentProfessional())
  );

  public currentClientProfessionals$ = new BehaviorSubject<{}>({});
  public currentClientProfessionalsSubject$ =
    this.currentClientProfessionals$.pipe(
      switchMap(() => this.printHiredProfessionals())
    );

  public visitedProfessional$ = new BehaviorSubject<string>("");
  public visitedProfessionalSubject$ = this.visitedProfessional$.pipe(
    switchMap((id: string) => this.printVisitedProfessional(id))
  );

  private constructor(private arreglaloService: ArreglaloService) {}

  public printProfessional() {
    return this.arreglaloService.getProfessionals();
  }

  public printHiredProfessionals() {
    return this.arreglaloService.getHiredProfessionals();
  }

  public printCurrentProfessional() {
    return this.arreglaloService.getCurrentProfessional();
  }

  public printVisitedProfessional(id: string) {
    return this.arreglaloService.getVisitedProfessional(id);
  }
}
