import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";
import { StoreService } from "src/app/core/services/store/store.service";
import { HamburgerComponent } from "../navbar/hamburger/hamburger.component";
import { NavbarComponent } from "../navbar/navbar.component";

import { HiredListComponent } from "./hired-list.component";

describe("Given the HiredListComponent", () => {
  let component: HiredListComponent;
  let fixture: ComponentFixture<HiredListComponent>;
  let routerFake: Router;

  const StoreServiceMock = {
    currentClientProfessionalsSubject$: of([
      {
        id: 1,
      },
    ]),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [
        {
          provide: StoreService,
          useValue: StoreServiceMock,
        },
      ],
      declarations: [HiredListComponent, NavbarComponent, HamburgerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HiredListComponent);
    component = fixture.componentInstance;
    routerFake = TestBed.inject(Router);
    fixture.detectChanges();
  });
  describe("When its rendered", () => {
    it("Should created", () => {
      expect(component).toBeTruthy();
    });

    it("Should call calculateUserAge function", () => {
      const spyFn = spyOn(component, "calculateUserAge").and.callThrough();

      component.calculateUserAge(new Date(2000, 1, 1));

      expect(spyFn).toHaveBeenCalled();
    });

    it("Should call handleCardClick function", () => {
      const spyFn = spyOn(component, "handleCardClick").and.callThrough();
      const navigateSpy = spyOn(routerFake, "navigate");

      component.handleCardClick("123");

      expect(navigateSpy).toHaveBeenCalled();
      expect(spyFn).toHaveBeenCalled();
    });
  });
});
