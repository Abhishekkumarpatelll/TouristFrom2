import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TouristService {

  private baseUrl = 'http://localhost:8080/api/';

  constructor(private http:HttpClient) { }

  getTouristList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+'tourists-list');
  }

  createTourist(tourist: object): Observable<object> {
    return this.http.post(`${this.baseUrl}`+'save-tourist', tourist);
  }

  deleteTourist(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete-tourist/${id}`, { responseType: 'text' });
  }

  getTourist(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/tourist/${id}`);
  }

  updateTourist(id: number, value: any): Observable<Object> {
    return this.http.post(`${this.baseUrl}/update-tourist/${id}`, value);
  }
  
}                                           