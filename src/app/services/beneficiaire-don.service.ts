import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import "../modele/beneficiaire.model";
import { Beneficiaire } from '../modele/beneficiaire.model';

@Injectable({
  providedIn: 'root'
})
export class BeneficiaireDonService {

  
  private userUrl = 'http://localhost:8081/api/test/user';
  private pmUrl = 'http://localhost:8081/api/test/pm';
  private adminUrl = 'http://localhost:8081/api/test/admin';

  public host = 'http://localhost:8081';

  constructor(private http: HttpClient) { }
  Allbeneficiaire() {
    return this.http.get(`http://localhost:8081/beneficiaire/`);
  }

  beneficiaireById(id) {
    return this.http.get<Beneficiaire>(`http://localhost:8081/beneficiaire/${id}`);
  }

  Savebeneficiaire( id ,beneficiaire) {
    return this.http.post(`http://localhost:8081/beneficiaire/save/${id}`, beneficiaire);
  }

  Updatebeneficiaire(id, beneficiaire) {
    return this.http.put(`http://localhost:8081/beneficiaire/edit/${id}` , beneficiaire);
  }

  Deletebeneficiaire(id, beneficiaire) {
  return this.http.put(`http://localhost:8081/beneficiaire/delete/${id}` , beneficiaire);
  }
}
