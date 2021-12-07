import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators, NgForm } from "@angular/forms";

import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import Swal from "sweetalert2";
import jwtDecode from "jwt-decode";
import { Subscription } from "rxjs";
import { ToastrService } from "ngx-toastr";

import { IProfessional } from "src/app/core/models/Professional";
import { PublicMethodsService } from "src/app/core/services/methods/public-methods.service";
import { StoreService } from "src/app/core/services/store/store.service";
import { IUserLogged } from "src/app/core/models/User";

@Component({
  selector: "arreglalo-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.css"],
})
export class DetailComponent implements OnInit {
  @Input() displayLocalUser: boolean = true;
  @Input() userIdToDisplay: string = "";

  faSpinner = faSpinner;

  updateProfessionalProfileForm?: FormGroup | any;

  isLoadingThePage: boolean = false;
  isEditingProfile: boolean = false;

  myProfessional?: any | IProfessional;
  loggedUserData!: IUserLogged;

  isProfessionalHired: boolean = false;
  disabledButton: boolean = false;

  visitedSubscription?: Subscription;
  professionalSubscription?: Subscription;

  visitedProfessional$ = this.storeService.visitedProfessional$;
  currentProfessional$ = this.storeService.currentProfessional$;

  constructor(
    public storeService: StoreService,
    public router: Router,
    public publicMethods: PublicMethodsService,
    public formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.isLoadingThePage = true;
    const userLogged = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user") || "")
      : "";
    if (userLogged) {
      this.loggedUserData = jwtDecode(userLogged.token);
    }

    if (this.displayLocalUser) {
      this.professionalSubscription =
        this.storeService.currentProfessionalSubject$.subscribe({
          next: (data) => {
            this.isLoadingThePage = false;
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
          },
          error: () => {
            this.router.navigate(["/not-found"]);
          },
        });
    } else {
      this.visitedSubscription =
        this.storeService.visitedProfessionalSubject$.subscribe({
          next: (data) => {
            this.isLoadingThePage = false;
            this.myProfessional = data;
            this.isProfessionalHired = data.clients.includes(
              this.loggedUserData.id
            );
          },
          error: () => {
            this.router.navigate(["/not-found"]);
          },
        });
      this.storeService.visitedProfessional$.next(this.userIdToDisplay);
    }
  }

  ngOnDestroy() {
    this.visitedSubscription?.unsubscribe();
    this.professionalSubscription?.unsubscribe();
  }

  deleteProfile() {
    this.publicMethods.deleteProfessionalProfile().subscribe({
      next: () => {
        this.publicMethods.removeUserToken();
        this.router.navigate(["/landing"]);
        this.toastr.info("Perfil eliminado correctamente.");
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
        Swal.fire("Perfil editado correctamente.", "", "success");
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

  handleHireClick(professionalToHireId: string) {
    this.disabledButton = true;
    this.publicMethods
      .hireSelectedProfessional(professionalToHireId)
      .subscribe({
        next: () => {
          Swal.fire("Se ha contratado al profesional.", "", "success");
        },
        error: () => {
          Swal.fire("Error contratando al profesional.", "", "error");
        },
        complete: () => {
          Swal.fire("Se ha contratado al profesional.", "", "success");
          this.storeService.visitedProfessional$.next(this.userIdToDisplay);
          this.disabledButton = false;
        },
      });
  }

  handleFireClick(professionalToFireId: string) {
    this.disabledButton = true;

    this.publicMethods
      .fireSelectedProfessional(professionalToFireId)
      .subscribe({
        next: () => {
          Swal.fire("Se ha despedido al profesional.", "", "success");
        },
        error: () => {
          Swal.fire("Error despidiendo al profesional.", "", "error");
        },
        complete: () => {
          this.storeService.visitedProfessional$.next(this.userIdToDisplay);
          this.disabledButton = false;
        },
      });
  }
}
