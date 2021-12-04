import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators, NgForm } from "@angular/forms";

import { IProfessional } from "src/app/core/models/Professional";
import { AuthService } from "src/app/core/services/auth/auth.service";
import { PublicMethodsService } from "src/app/core/services/methods/public-methods.service";
import { StoreService } from "src/app/core/services/store/store.service";

@Component({
  selector: "arreglalo-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.css"],
})
export class DetailComponent implements OnInit {
  currentProfessional$ = this.storeService.currentProfessional$;
  updateProfessionalProfileForm?: FormGroup | any;
  myProf!: any | IProfessional;
  isEditingProfile: boolean = false;

  constructor(
    public storeService: StoreService,
    public router: Router,
    public publicMethods: PublicMethodsService,
    public authMethods: AuthService,
    public formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.storeService.currentProfessionalSubject$.subscribe({
      next: (data) => {
        this.myProf = data;
        this.updateProfessionalProfileForm = this.formBuilder.group({
          skills: [this.myProf.skills, Validators.required],
          email: [this.myProf.email, Validators.required],
          name: [this.myProf.name, Validators.required],
          surname: [this.myProf.surname, Validators.required],
          phoneNumber: [this.myProf.phone, Validators.required],
          DNINumber: [this.myProf.DNI, Validators.required],
          street: [this.myProf.address.street, Validators.required],
          city: [this.myProf.address.city, Validators.required],
          zipNumber: [this.myProf.address.zip, Validators.required],
        });
      },
    });
  }

  deleteProfile() {
    this.publicMethods.deleteProfessionalProfile().subscribe({
      next: () => {
        this.authMethods.removeUserToken();
        this.router.navigate(["/landing"]);
      },
    });
  }

  updateProfile(form: NgForm) {
    const {
      street,
      city,
      zipNumber,
      DNINumber,
      phoneNumber,
      ...allRestInputs
    } = form.value;
    const DNI = DNINumber.toString();
    const zip = zipNumber.toString();
    const phone = phoneNumber.toString();

    const newProfessional = {
      ...allRestInputs,
      DNI,
      phone,
      address: {
        street,
        city,
        zip,
      },
    };

    this.publicMethods.updateCurrentProfesional(newProfessional).subscribe({
      complete: () => {
        this.storeService.currentProfessional$.next({});
        this.router.navigate(["/profile-edit"]);
        this.isEditingProfile = false;
      },
    });
  }

  toggleEditProfile(form?: NgForm) {
    this.isEditingProfile = !this.isEditingProfile;
    document.documentElement.scrollTop = 0;
    if (form) {
      form.reset({
        skills: [this.myProf?.skills],
        email: [this.myProf?.email],
        name: [this.myProf?.name],
        surname: [this.myProf?.surname],
        phoneNumber: [this.myProf?.phone],
        DNINumber: [this.myProf?.DNI],
        street: [this.myProf?.address.street],
        city: [this.myProf?.address.city],
        zipNumber: [this.myProf?.address.zip],
      });
    }
  }
}
