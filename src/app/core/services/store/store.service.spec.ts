import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { StoreService } from "./store.service";
import { ArreglaloService } from "../arreglalo/arreglalo.service";

let storeService: StoreService;
let arreglaloService: ArreglaloService;
let localStore: any;

describe("StoreService", () => {
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
      providers: [StoreService, ArreglaloService],
    });
    storeService = TestBed.inject(StoreService);
    arreglaloService = TestBed.inject(ArreglaloService);
  });

  it("should be created", () => {
    expect(storeService).toBeTruthy();
  });

  it("should call printProfessional", () => {
    const spyFn = spyOn(storeService, "printProfessional").and.callThrough();

    storeService.printProfessional();

    expect(spyFn).toHaveBeenCalled();
  });

  it("should call printVisitedProfessional", () => {
    spyOn(arreglaloService, "getVisitedProfessional").and.callThrough();

    const spyFn = spyOn(
      storeService,
      "printVisitedProfessional"
    ).and.callThrough();

    storeService.printVisitedProfessional("1");

    expect(spyFn).toHaveBeenCalled();
  });

  it("should call printHiredProfessionals", () => {
    const spyFn = spyOn(
      storeService,
      "printHiredProfessionals"
    ).and.callThrough();

    storeService.printHiredProfessionals();

    expect(spyFn).toHaveBeenCalled();
  });
});
