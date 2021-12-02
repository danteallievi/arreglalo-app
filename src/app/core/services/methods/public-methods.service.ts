import { Injectable } from "@angular/core";

import { IUser } from "../../models/User";
import { UserService } from "../user/user.service";

@Injectable({
  providedIn: "root",
})
export class PublicMethodsService {
  constructor(private userService: UserService) {}

  public loginUser(user: IUser) {
    const { email, password } = user;
    return this.userService.loginUserService(email, password);
  }
}
