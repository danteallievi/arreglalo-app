import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListComponent } from "./components/list/list.component";
import { ProtectRouteGuard } from "./core/services/guard/protect-route.guard";
import { CheckAuthGuard } from "./core/services/guard/check-auth.guard";
import { LandingComponent } from "./pages/landing/landing.component";
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";
import { RegisterProfessionalComponent } from "./pages/register/register-professional/register-professional.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";

const routes: Routes = [
  { path: "", redirectTo: "/landing", pathMatch: "full" },
  {
    path: "landing",
    pathMatch: "full",
    canActivate: [CheckAuthGuard],
    component: LandingComponent,
  },
  {
    path: "register",
    pathMatch: "full",
    canActivate: [CheckAuthGuard],
    component: RegisterComponent,
  },
  {
    path: "register-professional",
    pathMatch: "full",
    canActivate: [CheckAuthGuard],
    component: RegisterProfessionalComponent,
  },
  {
    path: "login",
    pathMatch: "full",
    canActivate: [CheckAuthGuard],
    component: LoginComponent,
  },
  {
    path: "list",
    pathMatch: "full",
    canActivate: [ProtectRouteGuard],
    component: ListComponent,
  },
  { path: "**", pathMatch: "full", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ArreglaloRoutingModule {}
