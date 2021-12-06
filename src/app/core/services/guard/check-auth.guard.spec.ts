/* eslint-disable no-return-assign */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { CheckAuthGuard } from "./check-auth.guard";

describe("CheckAuthGuard", () => {
  let service: CheckAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [CheckAuthGuard],
    });
    service = TestBed.inject(CheckAuthGuard);
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
