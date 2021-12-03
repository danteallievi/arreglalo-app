import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { DetailComponent } from "./detail.component";
import { ButtonComponent } from "../../components/button/button.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { HamburgerComponent } from "../../components/navbar/hamburger/hamburger.component";

describe("DetailComponent", () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        DetailComponent,
        ButtonComponent,
        NavbarComponent,
        HamburgerComponent,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("Should create", () => {
    expect(component).toBeTruthy();
  });

  it("Should render a button to edit", () => {
    const expectedText = "Editar";
    const compiled = fixture.debugElement.nativeElement;

    const [firstButton] = compiled.querySelectorAll("arreglalo-button");
    const buttonTitle = firstButton.textContent;

    expect(buttonTitle).toContain(expectedText);
  });

  it("Should render a button to delete profile", () => {
    const expectedText = "Borrar perfil";
    const compiled = fixture.debugElement.nativeElement;

    const [, secondButton] = compiled.querySelectorAll("button");
    const buttonTitle = secondButton.textContent;

    expect(buttonTitle).toContain(expectedText);
  });
});
