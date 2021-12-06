import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { StoreService } from "./store.service";

describe("StoreService", () => {
  let service: StoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [StoreService],
    });
    service = TestBed.inject(StoreService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should call printProfessional", () => {
    const spyFn = spyOn(service, "printProfessional").and.callThrough();
    service.printProfessional();
    expect(spyFn).toHaveBeenCalled();
  });

  it("should call printCurrentProfessional", () => {
    const spyFn = spyOn(service, "printCurrentProfessional").and.callThrough();
    service.printCurrentProfessional();
    expect(spyFn).toHaveBeenCalled();
  });

  it("should call printVisitedProfessional", () => {
    const spyFn = spyOn(service, "printVisitedProfessional").and.callThrough();
    service.printVisitedProfessional("1");
    expect(spyFn).toHaveBeenCalled();
  });
});
