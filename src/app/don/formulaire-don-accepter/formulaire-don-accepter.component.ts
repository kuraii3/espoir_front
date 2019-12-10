import { Component, OnInit } from '@angular/core';
import {Don} from "../../modele/don";
import {DonService} from "../../services/don.service";
import {ActivatedRoute, Router} from "@angular/router";
import { DatePipe } from '@angular/common';
import {FormBuilder, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-formulaire-don-accepter',
  templateUrl: './formulaire-don-accepter.component.html',
  styleUrls: ['./formulaire-don-accepter.component.css'],
  providers: [DatePipe]
})
export class FormulaireDonAccepterComponent implements OnInit {
  Don: Don;
  id: number;
  myDate = new Date();
  mot:String;
  lieu:any;

  constructor(private donServ: DonService, private router: ActivatedRoute, private route: Router, private datePipe: DatePipe) {
    // @ts-ignore
    this.myDate =  this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
  }

  ngOnInit() {
    this.Don = new Don();
    this.id = this.router.snapshot.params.id;
    this.findbyid(this.id);
    this.lieu = [{Name : "garde meuble"} , { Name: "depot de vente"}];

  }

  findbyid(id) {
    this.donServ.DonById(id).subscribe(
      resp => {
        this.Don = resp ;
        this.Don.dataAcceptation = this.myDate;
        console.log(resp);
      }
    );
  }
  accepter(id, don) {
    this.donServ.UpdateDon(id, don).subscribe(
      resp => {
        //this.route.navigate(['home']);
        if (this.Don.lieuStockage == 'garde meuble')
        {
          this.route.navigate(['garde/' + this.id]);
        }
        else if (this.Don.lieuStockage == 'depot de vente')
        {
          this.route.navigate(['depotVente/' + this.id]);
        }

      }
    );
  }


}
