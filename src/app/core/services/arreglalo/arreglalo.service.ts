import { HttpClient, HttpHeaders } from "@angular/common/http";
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
      headers: new HttpHeaders({
        "Content-type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYTNhYzcxZjY4OWQ5MjRkZTBjYjNhMCIsIm5hbWUiOiJhc2QiLCJzdXJuYW1lIjoiYXNkIiwiZW1haWwiOiJhc2RienpAenouY29tIiwiaWF0IjoxNjM4MzQyNzYyLCJleHAiOjE2Mzg1MTU1NjJ9.WQ_zxm7jkcAmMOFpAeIttqJbvIa32BJuwjjhGNvkpy0",
      }),
    });
  }
}
