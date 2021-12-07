import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators, NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import { ToastrService } from "ngx-toastr";

import { IUser } from "src/app/core/models/User";
import { PublicMethodsService } from "src/app/core/services/methods/public-methods.service";

@Component({
  selector: "arreglalo-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  loginForm: any | FormGroup;
  errorMessage = false;

  constructor(
    private publicMethods: PublicMethodsService,
    private formBuilder: FormBuilder,
    public router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  onSubmit(form: NgForm) {
    this.publicMethods.loginUser(form.value).subscribe({
      next: (data: IUser) => {
        localStorage.setItem("user", JSON.stringify(data));
        this.router.navigate(["/list"]);
        form.reset();
      },
      error: () => {
        this.toastr.error("", "Datos incorrectos.");
      },
      complete: () => {
        this.toastr.success("", "Bienvenido.");
      },
    });
  }
}
