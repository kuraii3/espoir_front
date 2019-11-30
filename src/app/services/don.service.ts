import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Don} from "../modele/don";

@Injectable({
  providedIn: 'root'
})
export class DonService {
  public host = 'http://localhost:8081';
  constructor(private http: HttpClient) { }

  AllDon() {
    return this.http.get(`http://localhost:8081/don/`);
  }
  DonById(id) {
    return this.http.get<Don>(`http://localhost:8081/don/${id}`);
  }
  Savedon( don) {
    return this.http.post(`http://localhost:8081/don/save`, don);
  }
  UpdateDon(id,don) {
    return this.http.put(`http://localhost:8081/don/edit/${id}`,don);
  }
  ListDonAccepted() {
    return this.http.get(`http://localhost:8081/don/Accepted/`);
  }
  ListDonRefused() {
    return this.http.get(`http://localhost:8081/don/Refused/`);
  }
  ListDonNotAccepted() {
    return this.http.get(`http://localhost:8081/don/notAccepted/`);
  }
  nbrAccepted() {
    return this.http.get('http://localhost:8081/don/nbrAccepted/');
  }
  lastid() {
    return this.http.get('http://localhost:8081/don/lastid/');
  }
  nbrnotAccepted() {
    return this.http.get('http://localhost:8081/don/nbrnotAccepted/');
  }


  Uploadphoto(file: File, idUser): Observable<HttpEvent<{}>> {

    const formData: FormData = new FormData();
    formData.append('file', file);
    //  if(this.jwtToken == null) this.loadToken();
    const req = new HttpRequest('POST', 'http://localhost:8081/don' + '/UploadPhoto/' + idUser  , formData, {
      reportProgress: true ,
      responseType: 'text'
      // headers: new HttpHeaders({'Authorization' : this.jwtToken})
    });
    return this.http.request(req);
  }
  handleImages(Event, don){
    const selectedFile = Event.target.files[0];
    let formData = new FormData();
    formData.append("file", selectedFile);

    this.http.post('http://localhost:8080/upload', formData)
  }
}
