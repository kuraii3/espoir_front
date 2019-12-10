import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GardemeubleService {

  private gardemeubleUrl = 'http://localhost:8081/api/test/gardemeuble';

  constructor(private http: HttpClient) { }
  getGardeMeubleBoard(): Observable<string> {
    return this.http.get(this.gardemeubleUrl, { responseType: 'text' });
  }
  Savegardemeuble(id ,  gardemeuble) {
    return this.http.post(`http://localhost:8081/gardemeuble/save/${id}`, gardemeuble);
  }
}
