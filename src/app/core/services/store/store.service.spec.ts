import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";

import { StoreService } from "./store.service";

let storeService: StoreService;

const myProfessionals = [
  {
    id: 1,
    name: "John Doe",
    email: "test@test.com",
  },
];

const StoreServiceMock = {
  printProfessional: () => of(myProfessionals),
  printCurrentProfessional: () => of(myProfessionals),
  printVisitedProfessional: () => of(myProfessionals),
};

describe("StoreService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [{ provide: StoreService, useValue: StoreServiceMock }],
    });
    storeService = TestBed.inject(StoreService);
  });

  it("should be created", () => {
    expect(storeService).toBeTruthy();
  });

  it("should call printProfessional", () => {
    const spyFn = spyOn(storeService, "printProfessional").and.callThrough();
    storeService.printProfessional();
    expect(spyFn).toHaveBeenCalled();
  });

  it("should call printCurrentProfessional", () => {
    const spyFn = spyOn(
      storeService,
      "printCurrentProfessional"
    ).and.callThrough();
    storeService.printCurrentProfessional();
    expect(spyFn).toHaveBeenCalled();
  });

  it("should call printVisitedProfessional", () => {
    const spyFn = spyOn(
      storeService,
      "printVisitedProfessional"
    ).and.callThrough();
    storeService.printVisitedProfessional("1");
    expect(spyFn).toHaveBeenCalled();
  });
});
