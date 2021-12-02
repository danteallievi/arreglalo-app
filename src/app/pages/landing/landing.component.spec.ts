import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ButtonComponent } from "../../components/button/button.component";
import { LandingComponent } from "./landing.component";

describe("HamburgerComponent", () => {
  let component: LandingComponent;
  let fixture: ComponentFixture<LandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandingComponent, ButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("Should render a h1 title", () => {
    const expectedText = "Arreglalo";
    const compiled = fixture.debugElement.nativeElement;

    const title = compiled.querySelector("h1").textContent;

    expect(title).toContain(expectedText);
  });

  it("Should render a login button", () => {
    const expectedText = "Iniciar sesión";
    const compiled = fixture.debugElement.nativeElement;

    const [firstButton] = compiled.querySelectorAll("button");
    const buttonTitle = firstButton.textContent;

    expect(buttonTitle).toContain(expectedText);
  });

  it("Should render a register button", () => {
    const expectedText = "Registrate";
    const compiled = fixture.debugElement.nativeElement;

    const [, secondButton] = compiled.querySelectorAll("button");
    const buttonTitle = secondButton.textContent;

    expect(buttonTitle).toContain(expectedText);
  });
});
