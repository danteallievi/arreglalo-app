import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { StoreService } from "src/app/core/services/store/store.service";

@Component({
  selector: "arreglalo-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  loginForm: any | FormGroup;

  user$ = this.storeService.user$;

  constructor(
    public storeService: StoreService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  onSubmit() {
    this.user$.next(this.loginForm.value);
    this.storeService.userSubject$.subscribe({
      next: (data) => {
        localStorage.setItem("user", JSON.stringify(data));
        this.router.navigate(["/list"]);
      },
    });
  }
}
