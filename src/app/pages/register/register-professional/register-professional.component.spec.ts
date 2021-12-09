import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";
import { RouterTestingModule } from "@angular/router/testing";
import { Observable } from "rxjs";
import { ToastrService } from "ngx-toastr";

import { PublicMethodsService } from "src/app/core/services/methods/public-methods.service";

import { ButtonComponent } from "../../../components/button/button.component";
import { RegisterProfessionalComponent } from "./register-professional.component";

describe("HamburgerComponent", () => {
  let component: RegisterProfessionalComponent;
  let publicMethods: PublicMethodsService;
  let fixture: ComponentFixture<RegisterProfessionalComponent>;

  const formFake = {
    email: "test@test.com",
    password: "test",
    name: "test",
    surname: "test",
    phone: "test",
    dateOfBirth: "test",
    DNINumber: 123,
    street: "test",
    city: "test",
    zip: "test",
  };
  class PublicMethodsServiceMock {
    registerProfessional = () =>
      new Observable((observer) => {
        observer.next(component.router.navigate(["/login"]));
        observer.error("Error");
        observer.complete();
      });
  }

  const ToastrServiceMock = {
    success: () => {},
    error: () => {},
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterProfessionalComponent, ButtonComponent],
      providers: [
        RegisterProfessionalComponent,
        { provide: PublicMethodsService, useClass: PublicMethodsServiceMock },
        { provide: ToastrService, useValue: ToastrServiceMock },
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([
          { path: "signin", component: RegisterProfessionalComponent },
        ]),
        HttpClientTestingModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterProfessionalComponent);
    component = fixture.componentInstance;

    publicMethods = TestBed.inject(PublicMethodsService);
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should have 10 inputs", () => {
    const inputs = fixture.debugElement.queryAll(By.css("input"));
    expect(inputs.length).toBe(10);
  });

  it("should have empty initial values", () => {
    const expectedInitialValues = {
      email: "",
      password: "",
      name: "",
      surname: "",
      phone: "",
      dateOfBirth: "",
      DNINumber: "",
      street: "",
      city: "",
      zip: "",
    };

    const registerFormGrupValues = component.professionalForm.value;

    expect(registerFormGrupValues).toEqual(expectedInitialValues);
  });

  it("should have a enter value after the user types", () => {
    const emailInput =
      fixture.debugElement.nativeElement.querySelectorAll("input")[0];

    emailInput.value = "test@test.com";
    emailInput.dispatchEvent(new Event("input"));
    fixture.detectChanges();

    expect(component.professionalForm.value.email).toBe(emailInput.value);
  });

  it("should have a initial disabled button", () => {
    const submitButton = fixture.debugElement.query(By.css("button"));

    expect(submitButton.nativeElement.disabled).toBeTrue();
  });

  it("should have a enabled button when the user fills all the inputs", () => {
    const [
      emailInput,
      passwordInput,
      nameInput,
      surnameInput,
      phoneInput,
      dateOfBirthInput,
      DNIInput,
      streetInput,
      cityInput,
      zipInput,
    ] = fixture.debugElement.nativeElement.querySelectorAll("input");
    const submitButton = fixture.debugElement.query(By.css("button"));

    emailInput.value = "test@test.com";
    passwordInput.value = "123456";
    nameInput.value = "test";
    surnameInput.value = "test";
    phoneInput.value = "123456789";
    dateOfBirthInput.value = "2000-01-01";
    DNIInput.value = 1234;
    streetInput.value = "test";
    cityInput.value = "test";
    zipInput.value = "12345";

    emailInput.dispatchEvent(new Event("input"));
    passwordInput.dispatchEvent(new Event("input"));
    nameInput.dispatchEvent(new Event("input"));
    surnameInput.dispatchEvent(new Event("input"));
    phoneInput.dispatchEvent(new Event("input"));
    dateOfBirthInput.dispatchEvent(new Event("input"));
    DNIInput.dispatchEvent(new Event("input"));
    streetInput.dispatchEvent(new Event("input"));
    cityInput.dispatchEvent(new Event("input"));
    zipInput.dispatchEvent(new Event("input"));

    fixture.detectChanges();

    expect(submitButton.nativeElement.disabled).toBeFalse();
  });

  it("should call the submit function when the user submit", () => {
    const form = fixture.debugElement.query(By.css("form"));
    component.professionalForm.value = formFake;
    const spyFn = spyOn(component, "onSubmit").and.callThrough();

    fixture.detectChanges();
    form.triggerEventHandler("submit", null);

    expect(spyFn).toHaveBeenCalledTimes(1);
  });

  it("Should navigate if the form is valid", () => {
    const navigateSpy = spyOn((<any>component).router, "navigate");

    const form = fixture.debugElement.query(By.css("form"));

    component.professionalForm.value = formFake;

    const spyFn = spyOn(
      publicMethods,
      "registerProfessional"
    ).and.callThrough();

    form.triggerEventHandler("submit", null);

    expect(spyFn).toHaveBeenCalled();
    expect(navigateSpy).toHaveBeenCalledWith(["/login"]);
  });
});
