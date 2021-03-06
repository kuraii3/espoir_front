import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Depotvente} from '../modele/depotvente';
@Injectable({
  providedIn: 'root'
})
export class DepotVenteService {
  private userUrl = 'http://localhost:8081/api/test/user';
  private pmUrl = 'http://localhost:8081/api/test/pm';
  private adminUrl = 'http://localhost:8081/api/test/admin';

  public host = 'http://localhost:8081';

  constructor(private http: HttpClient) { }
  AllDepotVente() {
    return this.http.get(`http://localhost:8081/deptVente/`);
  }

  DepotVenteById(id) {
    return this.http.get<Depotvente>(`http://localhost:8081/deptVente/${id}`);
  }

  SaveDepotVente( id , deptVente) {
    return this.http.post(`http://localhost:8081/deptVente/save/${id}`, deptVente);
  }

  UpdateDepotVente(id, deptVente) {
    return this.http.put(`http://localhost:8081/deptVente/edit/${id}` , deptVente);
  }

  lastid() {
    return this.http.get('http://localhost:8081/deptVente/lastid/');
  }
  deleteDepotVente(id) {
    return this.http.delete(`http://localhost:8081/deptVente/delete/${id}`);
  }
}
