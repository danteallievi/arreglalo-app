import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { By } from "@angular/platform-browser";

import { LoginComponent } from "./login.component";

describe("LoginComponent", () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      declarations: [LoginComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
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
});
