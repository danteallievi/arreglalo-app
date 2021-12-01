import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class CheckAuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): Promise<boolean> | boolean {
    return this.checkLocalStorageToken();
  }

  checkLocalStorageToken() {
    if (!localStorage.getItem("user")) {
      return true;
    }
    return this.router.navigate(["/list"]).then(() => false);
  }
}
