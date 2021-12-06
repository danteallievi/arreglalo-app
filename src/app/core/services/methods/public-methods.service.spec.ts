import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { PublicMethodsService } from "./public-methods.service";

describe("PublicMethodsService", () => {
  let service: PublicMethodsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [PublicMethodsService],
    });
    service = TestBed.inject(PublicMethodsService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should call loginUser", () => {
    const userToLog = {
      email: "asd",
      password: "asd",
    };
    const spyFn = spyOn(service, "loginUser").and.callThrough();
    service.loginUser(userToLog);
    expect(spyFn).toHaveBeenCalledWith(userToLog);
  });

  it("should call registerProfessional", () => {
    const professionalToRegister = {
      DNI: "asd",
      password: "asd",
      email: "asd@asd.com",
      address: {
        street: "asd",
        zip: "123",
        city: "asd",
      },
      dateOfBirth: "asd",
      name: "asd",
      surname: "asd",
      phone: "123",
      skills: ["asd"],
      avatar: "asd",
    };
    const spyFn = spyOn(service, "registerProfessional").and.callThrough();
    service.registerProfessional(professionalToRegister);
    expect(spyFn).toHaveBeenCalledWith(professionalToRegister);
  });

  it("should call deleteProfessionalProfile", () => {
    const spyFn = spyOn(service, "deleteProfessionalProfile").and.callThrough();
    service.deleteProfessionalProfile();
    expect(spyFn).toHaveBeenCalled();
  });

  it("should call updateCurrentProfesional", () => {
    const professionalToUpdate = {
      DNI: "asd",
      password: "asd",
      email: "asd@asd.com",
      address: {
        street: "asd",
        zip: "123",
        city: "asd",
      },
      dateOfBirth: "asd",
      name: "asd",
      surname: "asd",
      phone: "123",
      skills: ["asd"],
      avatar: "asd",
    };
    const spyFn = spyOn(service, "updateCurrentProfesional").and.callThrough();
    service.updateCurrentProfesional(professionalToUpdate);
    expect(spyFn).toHaveBeenCalledWith(professionalToUpdate);
  });
});
