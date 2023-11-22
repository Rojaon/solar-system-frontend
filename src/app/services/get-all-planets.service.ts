import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GetAllPlanetsService {

  private readonly API_URL = 'http://localhost:8080/api/planets';
 
  constructor(private http: HttpClient) {}
 
  getPlanets(): Observable<any> {
    return this.http.get<any>(this.API_URL);
  }
}
