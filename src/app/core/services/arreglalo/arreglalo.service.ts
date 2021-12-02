import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IProfessional } from "../../models/Professional";

@Injectable({
  providedIn: "root",
})
export class ArreglaloService {
  apiUrl: string = "https://proyecto-final-dante-back.herokuapp.com/";

  constructor(private http: HttpClient) {}

  getProfessionals(): Observable<any> {
    return this.http.get(`${this.apiUrl}professional`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
  }

  createProfessional(professional: IProfessional): Observable<any> {
    return this.http.post(
      `${this.apiUrl}user/professional/register`,
      professional
    );
  }
}
