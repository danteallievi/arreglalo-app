// import { HttpClientTestingModule } from "@angular/common/http/testing";
// import { ComponentFixture, TestBed } from "@angular/core/testing";
// import { RouterTestingModule } from "@angular/router/testing";

// import { ButtonComponent } from "../../components/button/button.component";
// import { HamburgerComponent } from "../../components/navbar/hamburger/hamburger.component";
// import { NavbarComponent } from "../../components/navbar/navbar.component";

// import { ProfileComponent } from "./profile.component";

// describe("ProfileComponent", () => {
//   let component: ProfileComponent;
//   let fixture: ComponentFixture<ProfileComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [RouterTestingModule, HttpClientTestingModule],
//       declarations: [
//         ProfileComponent,

//         ButtonComponent,
//         NavbarComponent,
//         HamburgerComponent,
//       ],
//     }).compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(ProfileComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it("Should create", () => {
//     expect(component).toBeTruthy();
//   });

//   it("Should have a h1 title", () => {
//     const expectedText = "perfil";
//     const compiled = fixture.debugElement.nativeElement;

//     const title = compiled.querySelector("h1").textContent;

//     expect(title).toContain(expectedText);
//   });

//   it("Should render a button to edit profile", () => {
//     const expectedText = "Editar perfil";
//     const compiled = fixture.debugElement.nativeElement;

//     const [firstButton] = compiled.querySelectorAll("button");
//     const buttonTitle = firstButton.textContent;

//     expect(buttonTitle).toContain(expectedText);
//   });
// });
