import { TestBed } from "@angular/core/testing";
import { ButtonComponent } from "./button.component";

describe("Given the button component", () => {
  describe("When it receives a text", () => {
    test("Then it should render the button with the given text", () => {
      const fixture = TestBed.createComponent(ButtonComponent);
      const app = fixture.componentInstance;
      app.buttonText = "Test";

      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;

      expect(compiled.querySelector("button").textContent).toContain("Test");
    });
  });
});
