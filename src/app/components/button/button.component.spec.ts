import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ButtonComponent } from "./button.component";

describe("Given the HamburgerComponent", () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      declarations: [ButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  describe("When its rendered", () => {
    it("Should created", () => {
      expect(component).toBeTruthy();
    });

    it("Should have a method buttonOnClick", () => {
      expect(component.buttonOnClick).toBeDefined();
    });

    it("Should raise a event when its clicked", () => {
      const button = fixture.debugElement.nativeElement.querySelector("button");
      spyOn(component.buttonClick, "emit");

      button.click();
      expect(component.buttonClick.emit).toHaveBeenCalledTimes(1);
    });

    it('Should have a primary color if it receives "primary" on buttonColor property', () => {
      const button = fixture.debugElement.nativeElement.querySelector("button");
      const expectedClass = "bg-primary";
      const backgroundColorClass = button.classList;
      component.buttonColor = "primary";

      fixture.detectChanges();

      expect(backgroundColorClass["1"]).toBe(expectedClass);
    });

    it('Should have a secondary color if it receives "secondary" on buttonColor property', () => {
      const button = fixture.debugElement.nativeElement.querySelector("button");
      const expectedClass = "bg-secondary";
      const backgroundColorClass = button.classList;
      component.buttonColor = "secondary";

      fixture.detectChanges();

      expect(backgroundColorClass["1"]).toBe(expectedClass);
    });

    it("Should have a given text", () => {
      const button = fixture.debugElement.nativeElement.querySelector("button");
      const expectedText = "test";
      component.buttonText = expectedText;

      fixture.detectChanges();

      expect(button.textContent).toContain(expectedText);
    });
  });
});
