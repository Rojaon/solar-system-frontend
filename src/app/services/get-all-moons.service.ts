import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GetAllMoonsService {

  private readonly API_URL = 'http://localhost:8080/api/moons';
 
  constructor(private http: HttpClient) {}
 
  getMoons(): Observable<any> {
    return this.http.get<any>(this.API_URL);
  }

  getMoon(id: string): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/${id}`);
  }

  postMoon(body: any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/add`, body);
  }

  deleteMoon(id: string): Observable<any> {
    return this.http.delete<any>(`${this.API_URL}/delete/${id}`);
  }
}
