import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { AuthService } from "./auth.service";

describe("StoreService", () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([
          { path: "landing", component: AuthService },
        ]),
      ],
      providers: [AuthService],
    });
    service = TestBed.inject(AuthService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should call getUserId", () => {
    const spyFn = spyOn(service, "getUserId").and.callThrough();
    service.getUserId();
    expect(spyFn).toHaveBeenCalled();
  });

  it("should call setUserToken", () => {
    const spyFn = spyOn(service, "removeUserToken").and.callThrough();
    service.removeUserToken();
    expect(spyFn).toHaveBeenCalled();
  });
});
