import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { ArreglaloService } from "./arreglalo.service";

describe("PublicMethodsService", () => {
  let service: ArreglaloService;
  let localStore: any;

  beforeEach(() => {
    const token: string = "TTTTTTTTTTTTTTTTTOKEEEENNNNNN";
    localStore = { token };

    spyOn(window.localStorage, "getItem").and.callFake((key) =>
      key in localStore ? localStore[key] : null
    );
    spyOn(window.localStorage, "setItem").and.callFake((key, value) => {
      localStore[key] = `${value}`;
    });
    spyOn(window.localStorage, "clear").and.callFake(() => {
      localStore = {};
    });

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [],
    });
    service = TestBed.inject(ArreglaloService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should call getUserLogedInfo", () => {
    const spyFn = spyOn(service, "getUserLogedInfo").and.callThrough();
    service.getUserLogedInfo();

    expect(spyFn).toHaveBeenCalled();
  });

  it("should call getVisitedProfessional", () => {
    const spyFn = spyOn(service, "getVisitedProfessional").and.callThrough();
    service.getVisitedProfessional("123");

    expect(spyFn).toHaveBeenCalled();
  });

  it("should call hireProfessional", () => {
    const spyFn = spyOn(service, "hireProfessional").and.callThrough();
    service.hireProfessional("123");

    expect(spyFn).toHaveBeenCalled();
  });

  it("should call getHiredProfessionals", () => {
    const spyFn = spyOn(service, "getHiredProfessionals").and.callThrough();
    service.getHiredProfessionals();

    expect(spyFn).toHaveBeenCalled();
  });

  it("should call rateProfessional", () => {
    const spyFn = spyOn(service, "rateProfessional").and.callThrough();
    service.rateProfessional("123", 3);

    expect(spyFn).toHaveBeenCalled();
  });

  it("should call fireProfessional", () => {
    const spyFn = spyOn(service, "fireProfessional").and.callThrough();
    service.fireProfessional("123");

    expect(spyFn).toHaveBeenCalled();
  });
});
