import { Injectable } from "@angular/core";

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
    private arreglaloService: ArreglaloService
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
}
