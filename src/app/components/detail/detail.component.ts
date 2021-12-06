import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators, NgForm } from "@angular/forms";

import { IProfessional } from "src/app/core/models/Professional";
import { PublicMethodsService } from "src/app/core/services/methods/public-methods.service";
import { StoreService } from "src/app/core/services/store/store.service";

@Component({
  selector: "arreglalo-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.css"],
})
export class DetailComponent implements OnInit {
  @Input() displayLocalUser: boolean = true;
  @Input() userIdToDisplay: string = "";
  updateProfessionalProfileForm?: FormGroup | any;

  isEditingProfile: boolean = false;
  isLoadingThePage: boolean = false;

  myProfessional?: any | IProfessional;

  visitedProfessional$ = this.storeService.visitedProfessional$;
  currentProfessional$ = this.storeService.currentProfessional$;

  constructor(
    public storeService: StoreService,
    public router: Router,
    public publicMethods: PublicMethodsService,
    public formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.isLoadingThePage = true;
    if (this.displayLocalUser) {
      this.storeService.currentProfessionalSubject$.subscribe({
        next: (data) => {
          this.myProfessional = data;
          this.updateProfessionalProfileForm = this.formBuilder.group({
            skills: [this.myProfessional.skills, Validators.required],
            email: [this.myProfessional.email, Validators.required],
            name: [this.myProfessional.name, Validators.required],
            surname: [this.myProfessional.surname, Validators.required],
            phoneNumber: [this.myProfessional.phone, Validators.required],
            DNINumber: [this.myProfessional.DNI, Validators.required],
            street: [this.myProfessional.address.street, Validators.required],
            city: [this.myProfessional.address.city, Validators.required],
            zipNumber: [this.myProfessional.address.zip, Validators.required],
          });
          this.isLoadingThePage = false;
        },
        error: (err) => {
          console.log(err);
        },
      });
    } else {
      this.storeService.visitedProfessional$.next(this.userIdToDisplay);
      this.storeService.visitedProfessionalSubject$.subscribe({
        next: (data) => {
          this.myProfessional = data;
          this.isLoadingThePage = false;
        },
        error: () => {
          this.router.navigate(["/not-found"]);
        },
      });
    }
  }

  deleteProfile() {
    this.publicMethods.deleteProfessionalProfile().subscribe({
      next: () => {
        this.publicMethods.removeUserToken();
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
        this.router.navigate(["/detail"]);
        this.isEditingProfile = false;
      },
    });
  }

  toggleEditProfile(form?: NgForm) {
    this.isEditingProfile = !this.isEditingProfile;
    document.documentElement.scrollTop = 0;
    if (form) {
      form.reset({
        skills: [this.myProfessional?.skills],
        email: [this.myProfessional?.email],
        name: [this.myProfessional?.name],
        surname: [this.myProfessional?.surname],
        phoneNumber: [this.myProfessional?.phone],
        DNINumber: [this.myProfessional?.DNI],
        street: [this.myProfessional?.address.street],
        city: [this.myProfessional?.address.city],
        zipNumber: [this.myProfessional?.address.zip],
      });
    }
  }
}
