import { HttpClient } from "@angular/common/http";
import { of } from "rxjs";
import { UserService } from "./user.service";

let httpClientSpy: jasmine.SpyObj<HttpClient>;
let userService: UserService;

describe("Given a UserService", () => {
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj("HttpClient", ["post"]);
    userService = new UserService(httpClientSpy);
  });
  describe("When loginUser functions it's called", () => {
    it("Then it should return the token and HttpClient called once", (done: DoneFn) => {
      const expectedToken: string = "123456789";
      httpClientSpy.post.and.returnValue(of(expectedToken));

      userService.loginUserService("1", "1").subscribe((token) => {
        expect(token).toEqual(expectedToken);
        done();
      }, done.fail);

      expect(httpClientSpy.post.calls.count()).toBe(1);
    });
  });
});
