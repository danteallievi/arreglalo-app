import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";
import { RouterTestingModule } from "@angular/router/testing";

import { ButtonComponent } from "../../../components/button/button.component";
import { RegisterProfessionalComponent } from "./register-professional.component";

describe("HamburgerComponent", () => {
  let component: RegisterProfessionalComponent;
  let fixture: ComponentFixture<RegisterProfessionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterProfessionalComponent, ButtonComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientTestingModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterProfessionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should render a disabled button", () => {
    const submitButton = fixture.debugElement.query(By.css("button"));

    expect(submitButton.nativeElement.disabled).toBeTrue();
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

    fixture.whenStable().then(() => {
      expect(component.professionalForm.value.email).toBe("test@test.com");
    });
  });

  it("should have a enabled button when the user fills all the inputs", () => {
    const emailInput =
      fixture.debugElement.nativeElement.querySelectorAll("input")[0];
    const passwordInput =
      fixture.debugElement.nativeElement.querySelectorAll("input")[1];
    const nameInput =
      fixture.debugElement.nativeElement.querySelectorAll("input")[2];
    const surnameInput =
      fixture.debugElement.nativeElement.querySelectorAll("input")[3];
    const phoneInput =
      fixture.debugElement.nativeElement.querySelectorAll("input")[4];
    const dateOfBirthInput =
      fixture.debugElement.nativeElement.querySelectorAll("input")[5];
    const DNIInput =
      fixture.debugElement.nativeElement.querySelectorAll("input")[6];
    const streetInput =
      fixture.debugElement.nativeElement.querySelectorAll("input")[7];
    const cityInput =
      fixture.debugElement.nativeElement.querySelectorAll("input")[8];
    const zipInput =
      fixture.debugElement.nativeElement.querySelectorAll("input")[9];
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

    fixture.whenStable().then(() => {
      expect(submitButton.nativeElement.disabled).toBeFalse();
    });
  });

  it("should call the submit function when the user submit", () => {
    const emailInput =
      fixture.debugElement.nativeElement.querySelectorAll("input")[0];
    const passwordInput =
      fixture.debugElement.nativeElement.querySelectorAll("input")[1];
    const nameInput =
      fixture.debugElement.nativeElement.querySelectorAll("input")[2];
    const surnameInput =
      fixture.debugElement.nativeElement.querySelectorAll("input")[3];
    const phoneInput =
      fixture.debugElement.nativeElement.querySelectorAll("input")[4];
    const dateOfBirthInput =
      fixture.debugElement.nativeElement.querySelectorAll("input")[5];
    const DNIInput =
      fixture.debugElement.nativeElement.querySelectorAll("input")[6];
    const streetInput =
      fixture.debugElement.nativeElement.querySelectorAll("input")[7];
    const cityInput =
      fixture.debugElement.nativeElement.querySelectorAll("input")[8];
    const zipInput =
      fixture.debugElement.nativeElement.querySelectorAll("input")[9];
    const form = fixture.debugElement.query(By.css("form"));
    spyOn(component, "onSubmit");

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
    form.triggerEventHandler("submit", null);

    expect(component.onSubmit).toHaveBeenCalledTimes(1);
  });

  // it("Should navigate if the form is valid", () => {
  //   const testForm = <NgForm>{
  //     value: {
  //       name: "Hello",
  //       surname: "World",
  //       email: "asd@asd.com",
  //       password: "123456",
  //       phone: "123456789",
  //       dateOfBirth: "2000-01-01",
  //       DNINumber: "1234",
  //       street: "test",
  //       city: "test",
  //       zip: "12345",
  //     },
  //   };

  //   const navigateSpy = spyOn((<any>component).router, "navigate");

  //   const emailInput =
  //     fixture.debugElement.nativeElement.querySelectorAll("input")[0];
  //   const passwordInput =
  //     fixture.debugElement.nativeElement.querySelectorAll("input")[1];
  //   const nameInput =
  //     fixture.debugElement.nativeElement.querySelectorAll("input")[2];
  //   const surnameInput =
  //     fixture.debugElement.nativeElement.querySelectorAll("input")[3];
  //   const phoneInput =
  //     fixture.debugElement.nativeElement.querySelectorAll("input")[4];
  //   const dateOfBirthInput =
  //     fixture.debugElement.nativeElement.querySelectorAll("input")[5];
  //   const DNIInput =
  //     fixture.debugElement.nativeElement.querySelectorAll("input")[6];
  //   const streetInput =
  //     fixture.debugElement.nativeElement.querySelectorAll("input")[7];
  //   const cityInput =
  //     fixture.debugElement.nativeElement.querySelectorAll("input")[8];
  //   const zipInput =
  //     fixture.debugElement.nativeElement.querySelectorAll("input")[9];
  //   const form = fixture.debugElement.query(By.css("form"));
  //   const button = fixture.debugElement.query(By.css("button"));
  //   spyOn(component, "onSubmit");

  //   emailInput.value = "test@test.com";
  //   passwordInput.value = "123456";
  //   nameInput.value = "test";
  //   surnameInput.value = "test";
  //   phoneInput.value = "123456789";
  //   dateOfBirthInput.value = "2000-01-01";
  //   DNIInput.value = 1234;
  //   streetInput.value = "test";
  //   cityInput.value = "test";
  //   zipInput.value = "12345";

  //   emailInput.dispatchEvent(new Event("input"));
  //   passwordInput.dispatchEvent(new Event("input"));
  //   nameInput.dispatchEvent(new Event("input"));
  //   surnameInput.dispatchEvent(new Event("input"));
  //   phoneInput.dispatchEvent(new Event("input"));
  //   dateOfBirthInput.dispatchEvent(new Event("input"));
  //   DNIInput.dispatchEvent(new Event("input"));
  //   streetInput.dispatchEvent(new Event("input"));
  //   cityInput.dispatchEvent(new Event("input"));
  //   zipInput.dispatchEvent(new Event("input"));

  //   fixture.detectChanges();
  //   form.triggerEventHandler("submit", null);
  //   component.onSubmit(testForm);

  //   fixture.detectChanges();

  //   expect(component.professionalForm.valid).toBeTrue();
  //   expect(component.onSubmit).toHaveBeenCalledTimes(1);
  //   // expect(navigateSpy).toHaveBeenCalledWith(["/login/"]);
  // });
});
