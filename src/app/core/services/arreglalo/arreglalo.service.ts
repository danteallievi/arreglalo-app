import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IProfessional } from "../../models/Professional";
import { LocalUser } from "../../models/User";
import { AuthService } from "../auth/auth.service";

@Injectable({
  providedIn: "root",
})
export class ArreglaloService {
  userInfo?: LocalUser;
  userToken?: string;
  apiUrl: string = "https://proyecto-final-dante-back.herokuapp.com/";

  constructor(private http: HttpClient, private userData: AuthService) {}

  getProfessionals(): Observable<any> {
    this.userToken = this.userData.getUserToken();
    return this.http.get(`${this.apiUrl}professional`, {
      headers: { Authorization: `Bearer ${this.userToken}` },
    });
  }

  getCurrentProfessional(): Observable<any> {
    this.userInfo = this.userData.getUserData();
    return this.http.get(`${this.apiUrl}professional/${this.userInfo?.id}`, {
      headers: { Authorization: `Bearer ${this.userToken}` },
    });
  }

  createProfessional(professional: IProfessional): Observable<any> {
    return this.http.post(
      `${this.apiUrl}user/professional/register`,
      professional
    );
  }

  deleteProfessional(): Observable<any> {
    this.userToken = this.userData.getUserToken();
    return this.http.delete(`${this.apiUrl}professional/delete`, {
      headers: { Authorization: `Bearer ${this.userToken}` },
    });
  }

  updateProfesional(professional: IProfessional): Observable<any> {
    this.userToken = this.userData.getUserToken();
    return this.http.put(`${this.apiUrl}professional/update`, professional, {
      headers: { Authorization: `Bearer ${this.userToken}` },
    });
  }
}
