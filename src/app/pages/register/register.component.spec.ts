import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { RouterLinkWithHref } from "@angular/router";

import { ButtonComponent } from "../../components/button/button.component";
import { RegisterComponent } from "./register.component";

describe("HamburgerComponent", () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterComponent, ButtonComponent],
      providers: [
        {
          provide: RouterLinkWithHref,
          useValue: {
            routerLink: "/test",
            routerLinkActiveOptions: { exact: true },
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("Should render a h1 title", () => {
    const expectedText = "Registrarse";
    const compiled = fixture.debugElement.nativeElement;

    const title = compiled.querySelector("h1").textContent;

    expect(title).toContain(expectedText);
  });

  it("Should render a client button", () => {
    const expectedText = "Cliente";
    const compiled = fixture.debugElement.nativeElement;
    const [linkElement] = fixture.debugElement.queryAll(By.css("a"));

    const [firstButton] = compiled.querySelectorAll("button");
    const buttonTitle = firstButton.textContent;
    const routerLinkInstance = linkElement.injector.get(RouterLinkWithHref);

    expect(routerLinkInstance.routerLink).toEqual("/test");
    expect(buttonTitle).toContain(expectedText);
  });

  it("Should render a register button", () => {
    const expectedText = "Profesional";
    const compiled = fixture.debugElement.nativeElement;
    const [, secondLinkElement] = fixture.debugElement.queryAll(By.css("a"));

    const [, secondButton] = compiled.querySelectorAll("button");
    const buttonTitle = secondButton.textContent;
    const routerLinkInstance =
      secondLinkElement.injector.get(RouterLinkWithHref);

    expect(routerLinkInstance.routerLink).toEqual("/test");
    expect(buttonTitle).toContain(expectedText);
  });
});
