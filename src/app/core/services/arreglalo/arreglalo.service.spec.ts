import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { ArreglaloService } from "./arreglalo.service";

describe("PublicMethodsService", () => {
  let service: ArreglaloService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [],
    });
    service = TestBed.inject(ArreglaloService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should call getVisitedProfessional", () => {
    const spyFn = spyOn(service, "getVisitedProfessional").and.callThrough();
    service.getVisitedProfessional("123");

    expect(spyFn).toHaveBeenCalled();
  });
});
