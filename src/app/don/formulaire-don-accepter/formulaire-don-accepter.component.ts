import { Component, OnInit } from '@angular/core';
import {Don} from "../../modele/don";
import {DonService} from "../../services/don.service";
import {ActivatedRoute, Router} from "@angular/router";
import { DatePipe } from '@angular/common';
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
  constructor(private donServ: DonService, private router: ActivatedRoute, private route: Router, private datePipe: DatePipe) {
    // @ts-ignore
    this.myDate =  this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
  }

  ngOnInit() {
    this.Don = new Don();
    this.id = this.router.snapshot.params.id;
    this.findbyid(this.id);

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
        this.route.navigate(['home']);
      }
    );
  }

}
