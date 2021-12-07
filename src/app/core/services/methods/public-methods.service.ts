import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import { IProfessional } from "../../models/Professional";
import { IUser } from "../../models/User";
import { ArreglaloService } from "../arreglalo/arreglalo.service";
import { UserService } from "../user/user.service";

@Injectable({
  providedIn: "root",
})
export class PublicMethodsService {
  constructor(
    private userService: UserService,
    private arreglaloService: ArreglaloService,
    private router: Router
  ) {}

  public loginUser(user: IUser) {
    const { email, password } = user;
    return this.userService.loginUserService(email, password);
  }

  public registerProfessional(professional: IProfessional) {
    return this.arreglaloService.createProfessional(professional);
  }

  public deleteProfessionalProfile() {
    return this.arreglaloService.deleteProfessional();
  }

  public updateCurrentProfesional(professional: IProfessional) {
    return this.arreglaloService.updateProfesional(professional);
  }

  public hireSelectedProfessional(professionalToHireId: string) {
    return this.arreglaloService.hireProfessional(professionalToHireId);
  }

  public fireSelectedProfessional(professionalToFireId: string) {
    return this.arreglaloService.fireProfessional(professionalToFireId);
  }

  public async removeUserToken() {
    await localStorage.removeItem("user");
    this.router.navigate(["/landing"]);
  }
}
