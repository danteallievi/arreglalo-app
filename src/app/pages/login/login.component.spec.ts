import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { By } from "@angular/platform-browser";
import { Observable } from "rxjs";

import { PublicMethodsService } from "src/app/core/services/methods/public-methods.service";

import { LoginComponent } from "./login.component";

describe("LoginComponent", () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let publicMethods: PublicMethodsService;

  class PublicMethodsServiceMock {
    loginUser = () =>
      new Observable((observer) => {
        observer.next(component.router.navigate(["/list"]));
        observer.error((component.errorMessage = true));
      });
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [
        {
          provide: PublicMethodsService,
          useClass: PublicMethodsServiceMock,
        },
      ],
      declarations: [LoginComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;

    publicMethods = TestBed.inject(PublicMethodsService);
    fixture.detectChanges();
  });

  it("Should create", () => {
    expect(component).toBeTruthy();
  });

  it("Should render a button disabled", () => {
    const submitButton = fixture.debugElement.query(By.css("button"));

    expect(submitButton.nativeElement.disabled).toBeTrue();
  });

  it("Should render a enabled button", () => {
    const emailInput =
      fixture.debugElement.nativeElement.querySelectorAll("input")[0];
    const passwordInput =
      fixture.debugElement.nativeElement.querySelectorAll("input")[1];

    const submitButton = fixture.debugElement.query(By.css("button"));

    emailInput.value = "test@test.com";
    passwordInput.value = "123456";

    emailInput.dispatchEvent(new Event("input"));
    passwordInput.dispatchEvent(new Event("input"));

    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(submitButton.nativeElement.disabled).toBeFalse();
    });
  });

  it("Should call the function when the user clicks the button", () => {
    const emailInput =
      fixture.debugElement.nativeElement.querySelectorAll("input")[0];
    const passwordInput =
      fixture.debugElement.nativeElement.querySelectorAll("input")[1];
    const form = fixture.debugElement.query(By.css("form"));
    spyOn(component, "onSubmit");

    emailInput.value = "test@test.com";
    passwordInput.value = "123456";

    emailInput.dispatchEvent(new Event("input"));
    passwordInput.dispatchEvent(new Event("input"));
    form.triggerEventHandler("submit", null);

    fixture.detectChanges();

    expect(component.onSubmit).toHaveBeenCalledTimes(1);
  });

  it("Should call the public method if the submit was successfully", () => {
    const spyFn = spyOn(publicMethods, "loginUser").and.callThrough();

    const emailInput =
      fixture.debugElement.nativeElement.querySelectorAll("input")[0];
    const passwordInput =
      fixture.debugElement.nativeElement.querySelectorAll("input")[1];
    const form = fixture.debugElement.query(By.css("form"));
    emailInput.value = "test@test.com";
    passwordInput.value = "123456";
    emailInput.dispatchEvent(new Event("input"));
    passwordInput.dispatchEvent(new Event("input"));
    form.triggerEventHandler("submit", null);

    fixture.detectChanges();

    expect(spyFn).toHaveBeenCalled();
  });
});
