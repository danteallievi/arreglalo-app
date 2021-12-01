import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class ProtectRouteGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): Promise<boolean> | boolean {
    return this.checkLocalStorageToken();
  }

  checkLocalStorageToken() {
    if (!localStorage.getItem("user")) {
      return this.router.navigate(["/landing"]).then(() => false);
    }
    return true;
  }
}
