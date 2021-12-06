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
    public router: Router,
    private publicMethods: PublicMethodsService
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

  onSubmit(form: NgForm) {
    const { street, city, zip, DNINumber, ...allRestInputs } = form.value;
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

    if (form.valid) {
      this.publicMethods.registerProfessional(newProfessional).subscribe({
        next: () => {
          this.router.navigate(["/login"]);
          form.reset();
        },
      });
    }
  }
}
