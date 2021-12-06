import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import jwtDecode from "jwt-decode";

import { IProfessional } from "../../models/Professional";
import { LocalUser } from "../../models/User";

@Injectable({
  providedIn: "root",
})
export class ArreglaloService {
  userInfo?: LocalUser;

  currentUser?: LocalUser;
  apiUrl = "https://danteallievi-finalboss.herokuapp.com/";

  constructor(private http: HttpClient) {}

  getProfessionals(): Observable<any> {
    const userToken = this.getUserToken();
    return this.http.get(`${this.apiUrl}professional`, {
      headers: { Authorization: `Bearer ${userToken}` },
    });
  }

  getCurrentProfessional(): Observable<any> {
    const userToken = this.getUserToken();
    let userData!: {
      id: string;
    };

    const userLogged = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user") || "")
      : "";

    if (userLogged) {
      userData = jwtDecode(userLogged.token);
    }

    return this.http.get(`${this.apiUrl}professional/${userData.id}`, {
      headers: { Authorization: `Bearer ${userToken}` },
    });
  }

  getVisitedProfessional(id: string): Observable<any> {
    const userToken = this.getUserToken();

    return this.http.get(`${this.apiUrl}professional/${id}`, {
      headers: { Authorization: `Bearer ${userToken}` },
    });
  }

  createProfessional(professional: IProfessional): Observable<any> {
    return this.http.post(
      `${this.apiUrl}user/professional/register`,
      professional
    );
  }

  deleteProfessional(): Observable<any> {
    const userToken = this.getUserToken();
    return this.http.delete(`${this.apiUrl}professional/delete`, {
      headers: { Authorization: `Bearer ${userToken}` },
    });
  }

  updateProfesional(professional: IProfessional): Observable<any> {
    const userToken = this.getUserToken();
    return this.http.put(`${this.apiUrl}professional/update`, professional, {
      headers: { Authorization: `Bearer ${userToken}` },
    });
  }

  getUserToken() {
    const userLogged = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user") || "")
      : "";

    if (userLogged) {
      return userLogged.token;
    }
    return null;
  }
}
