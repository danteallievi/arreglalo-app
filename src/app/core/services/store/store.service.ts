import { Injectable } from "@angular/core";
import { BehaviorSubject, switchMap } from "rxjs";
import { IUser } from "../../models/User";
import { ArreglaloService } from "../arreglalo/arreglalo.service";
import { UserService } from "../user/user.service";

@Injectable({
  providedIn: "root",
})
export class StoreService {
  public professionals$ = new BehaviorSubject<{}>({});
  public professionalsSubject$ = this.professionals$.pipe(
    switchMap(() => this.printProfessional())
  );

  public user$ = new BehaviorSubject<IUser>({ email: "", password: "" });
  public userSubject$ = this.user$.pipe(
    switchMap((user) => this.loginUser(user))
  );

  public constructor(
    private arreglaloService: ArreglaloService,
    private userService: UserService
  ) {}

  private printProfessional() {
    return this.arreglaloService.getProfessionals();
  }

  private loginUser(user: IUser) {
    const { email, password } = user;
    return this.userService.loginUserService(email, password);
  }
}
