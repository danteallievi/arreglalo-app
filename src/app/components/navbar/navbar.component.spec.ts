import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { HamburgerComponent } from "./hamburger/hamburger.component";
import { NavbarComponent } from "./navbar.component";

describe("Given the HamburgerComponent", () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [NavbarComponent, HamburgerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  describe("When its rendered", () => {
    it("Should created", () => {
      expect(component).toBeTruthy();
    });

    it("Should have a hamburger", () => {
      const hamburger =
        fixture.debugElement.nativeElement.querySelector("#hamburger");

      expect(hamburger).toBeTruthy();
    });

    it("Should have a method to log out", () => {
      expect(component.logOutUser).toBeDefined();
    });

    it("Should call the log out function when the list item is clicked", () => {
      const logOutListItem = fixture.debugElement.nativeElement.querySelector(
        ".navbar-mobile-modal__list--logout"
      );
      jest.spyOn(component, "logOutUser");

      logOutListItem.click();

      expect(component.logOutUser).toHaveBeenCalledTimes(1);
    });

    it("Should have a method to toggle the navbar", () => {
      expect(component.toggleNavbar).toBeDefined();
      expect(component.isOpen).toBe(true);
    });

    it("Should have a method isOpen", () => {
      expect(component.toggleNavbar).toBeDefined();
      expect(component.isOpen).toBe(true);
    });

    it("Should call the toggle navbar function when the hamburger is clicked", () => {
      const hamburger =
        fixture.debugElement.nativeElement.querySelector("#hamburger");
      jest.spyOn(component, "toggleNavbar");

      hamburger.click();

      expect(component.toggleNavbar).toHaveBeenCalledTimes(1);
      expect(component.isOpen).toBe(false);
    });
  });
});
