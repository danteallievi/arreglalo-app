import { TestBed } from "@angular/core/testing";
import { CardComponent } from "./card.component";

describe("Given the button component", () => {
  describe("When it receives a username", () => {
    test("Then it should render the button with the given username", () => {
      const fixture = TestBed.createComponent(CardComponent);
      const component = fixture.componentInstance;
      component.username = "Username";

      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      const expectedText = compiled.querySelector("h2").textContent;

      expect(expectedText).toContain(component.username);
    });
  });

  describe("When it receives a profession", () => {
    test("Then it should render the button with the given profession", () => {
      const fixture = TestBed.createComponent(CardComponent);
      const component = fixture.componentInstance;
      component.profession = "Profession";

      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      const expectedText = compiled.querySelector("h3").textContent;

      expect(expectedText).toContain(component.profession);
    });
  });

  describe("When it receives a age", () => {
    test("Then it should render the button with the given age", () => {
      const fixture = TestBed.createComponent(CardComponent);
      const component = fixture.componentInstance;
      component.age = "Age";

      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      const [expectedText] = compiled.querySelectorAll("p");

      expect(expectedText.textContent).toContain(component.age);
    });
  });

  describe("When it receives a calification", () => {
    test("Then it should render the button with the given calification", () => {
      const fixture = TestBed.createComponent(CardComponent);
      const component = fixture.componentInstance;
      component.calification = "Calification";

      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      const [, expectedText] = compiled.querySelectorAll("p");

      expect(expectedText.textContent).toContain(component.calification);
    });
  });
});
