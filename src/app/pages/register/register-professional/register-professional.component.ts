import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators, NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { PublicMethodsService } from "src/app/core/services/methods/public-methods.service";

@Component({
  selector: "arreglalo-register-professional",
  templateUrl: "./register-professional.component.html",
  styleUrls: ["./register-professional.component.css"],
})
export class RegisterProfessionalComponent implements OnInit {
  professionalForm: any | FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private publicMethods: PublicMethodsService
  ) {}

  ngOnInit(): void {
    this.professionalForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
      checkpassword: ["", Validators.required],
      name: ["", Validators.required],
      surname: ["", Validators.required],
      phone: ["", Validators.required],
      dateOfBirth: ["", Validators.required],
      street: ["", Validators.required],
      city: ["", Validators.required],
      zip: ["", Validators.required],
    });
    // this.checkFormChanges();
  }

  onSubmit(form: NgForm) {
    this.publicMethods.loginUser(form.value).subscribe({
      next: () => {
        this.router.navigate(["/login"]);
        form.reset();
      },
    });
  }
}
