import { render } from "@testing-library/angular";
import { LoginComponent } from "./login.component";

describe("", () => {
  describe("", () => {
    test("", () => {
      render(LoginComponent);

      const expectedText = "Contactá con el profesional que necesitás";

      expect(expectedText).toBeInTheDocument();
    });
  });
});
