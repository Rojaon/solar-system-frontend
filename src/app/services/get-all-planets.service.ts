import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GetAllPlanetsService {

  private readonly API_URL = "https://randomuser.me/api";
 
  constructor(private http: HttpClient) {}
 
  getRandomUser(): Observable<any> {
    return this.http.get<any>(this.API_URL + "/");
  }
}
