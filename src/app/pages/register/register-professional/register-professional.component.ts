import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
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
    public router: Router,
    private publicMethods: PublicMethodsService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.professionalForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
      name: ["", Validators.required],
      surname: ["", Validators.required],
      phone: ["", Validators.required],
      dateOfBirth: ["", Validators.required],
      DNINumber: ["", Validators.required],
      street: ["", Validators.required],
      city: ["", Validators.required],
      zip: ["", Validators.required],
    });
  }

  onSubmit() {
    const { street, city, zip, DNINumber, ...allRestInputs } =
      this.professionalForm.value;
    const DNI = DNINumber.toString();
    const newProfessional = {
      ...allRestInputs,
      DNI,
      address: {
        street,
        city,
        zip,
      },
      skills: ["asd"],
    };

    this.publicMethods.registerProfessional(newProfessional).subscribe({
      next: () => {
        this.router.navigate(["/login"]);
        this.professionalForm.reset();
      },
      error: () => {
        this.toastr.error("", "Error registrando profesional.");
      },
      complete: () => {
        this.toastr.success("", "Usuario registrado correctamente.");
      },
    });
  }
}
