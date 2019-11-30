import { Component, OnInit } from '@angular/core';
import {DonService} from "../services/don.service";
import {Don} from "../modele/don";
import { DatePipe } from '@angular/common';
import {Router} from "@angular/router";
import {HttpEventType, HttpResponse} from "@angular/common/http";
@Component({
  selector: 'app-don',
  templateUrl: './don.component.html',
  styleUrls: ['./don.component.css'],
  providers: [DatePipe]
})
export class DonComponent implements OnInit {
formualire:any;
Don: Don;
Don2: Don;
myDate = new Date();

  private editphoto: boolean;
  private currentProduct: any;
  private selectedFile;
  private progress;
  private currentFileUpload: any;
  photo: any ;
  id: any ;
  n:any;
  constructor(private donServ: DonService, private datePipe: DatePipe , private route: Router) {
    // @ts-ignore
    this.myDate =  this.datePipe.transform(this.myDate, 'yyyy-MM-dd');

  }

  ngOnInit() {
    this.Don = new Don();
    this.Don2 = new Don();
    this.Don.dateReception = this.myDate;


    // this.photo = '../../../assets/img/' + this.id + '.jpg';

  }
getAll(){
    this.donServ.AllDon().subscribe(
      data=> {
        this.formualire =data;
        console.log(data)
      }
    )
}
  getLastId(){
    this.donServ.lastid().subscribe(
      data=> {
        this.id =data;
        this.id;
        console.log('hello ' + this.id )
      }
    )
  }
  getLastId2(){
    return new Promise(resolve => {
      this.donServ.lastid().subscribe(
        data=> {
          this.id =data;
          this.id;
          console.log('hello ' + this.id );
          resolve(this.id)
        }
      )
    })
  }
save(){
  this.donServ.Savedon(this.Don).subscribe(
data=>{
  this.getLastId2().then(  res => { // Success
    console.log('llaalaa '+res);
    this.n = res;
    this.findbyid(this.n);
    console.log('n est '+this.n);


  });
  this.route.navigate(['home']);
}
)

}
  refuser(){
    this.donServ.Savedon(this.Don).subscribe(
      data=>{
        this.route.navigate(['home']);}
    )
  }

  findbyid(id) {
    this.donServ.DonById(id).subscribe(
      resp => {
        this.Don2 = resp ;
        console.log('bonjour');
        console.log(resp);
        this.onEditPhoto(this.Don2);
        this.upload();
      }
    );
  }

  onEditPhoto(p) {
    this.currentProduct = p;
    console.log('hhhhhh ', this.currentProduct);
    this.editphoto = true;
  }

  onSelectedFile(Event) {
    this.selectedFile = Event.target.files;
  }

  upload() {
    this.progress = 0;
    this.currentFileUpload = this.selectedFile.item(0);
    this.donServ.Uploadphoto(this.currentFileUpload , this.currentProduct.don_id).subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          alert('donner cherger avec succes');
        }
      }, err => {
        alert('probleme ' );
      }
    );
    this.selectedFile = undefined;
  }
}
