import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { ArreglaloService } from "src/app/core/services/arreglalo/arreglalo.service";
import { HamburgerComponent } from "../navbar/hamburger/hamburger.component";
import { NavbarComponent } from "../navbar/navbar.component";

import { ListComponent } from "./list.component";

describe("Given the ListComponent", () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [ArreglaloService],
      declarations: [ListComponent, NavbarComponent, HamburgerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe("When its rendered", () => {
    it("Should created", () => {
      expect(component).toBeTruthy();
    });

    it("should have a method calculateUserAge", () => {
      expect(component.calculateUserAge).toBeDefined();
    });

    it("should have a method calculateUserAge", () => {
      const spyFn = spyOn(component, "calculateUserAge").and.callThrough();
      component.calculateUserAge(new Date());

      expect(spyFn).toHaveBeenCalled();
    });

    it("should navigate to the detail page when the user clicks on a card with a given id", () => {
      const navigateSpy = spyOn((<any>component).router, "navigate");
      const id = "123";
      component.handleCardClick(id);
      expect(navigateSpy).toHaveBeenCalledWith(["/detail/", id]);
    });
  });
});
