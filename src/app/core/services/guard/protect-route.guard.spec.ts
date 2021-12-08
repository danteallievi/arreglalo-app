/* eslint-disable no-return-assign */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ProtectRouteGuard } from "./protect-route.guard";

describe("ProtectRouteGuard", () => {
  let service: ProtectRouteGuard;

  let localStore: any;

  const token: string = "TOKEN";
  beforeEach(() => {
    localStore = { token };

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        RouterTestingModule.withRoutes([
          { path: "landing", component: ProtectRouteGuard },
        ]),
      ],
      providers: [ProtectRouteGuard],
    });
    service = TestBed.inject(ProtectRouteGuard);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should call canActivate", () => {
    const spyFunction = spyOn(service, "canActivate").and.callThrough();
    service.canActivate();
    expect(spyFunction).toHaveBeenCalled();
  });
});
