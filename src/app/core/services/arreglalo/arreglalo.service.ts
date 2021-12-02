import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ArreglaloService {
  apiUrl: string =
    "https://proyecto-final-dante-back.herokuapp.com/professional";

  constructor(private http: HttpClient) {}

  getProfessionals(): Observable<any> {
    return this.http.get(this.apiUrl, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
  }
}
