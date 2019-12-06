import { Component, OnInit } from '@angular/core';

import {ActivatedRoute, Router } from "@angular/router";
import {GardemeubleService} from "../services/gardemeuble.service";
import {GardeMeuble} from '../modele/garde-meuble';
import {DonService} from '../services/don.service';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-garde-meuble',
  templateUrl: './garde-meuble.component.html',
  styleUrls: ['./garde-meuble.component.css'],
  providers: [DatePipe]
})
export class GardeMeubleComponent implements OnInit {
  formulaire:any;
  myDate = new Date();
  gar : GardeMeuble;

  constructor(private gardemeubleServ: GardemeubleService ,private router: ActivatedRoute, private route: Router, private datePipe: DatePipe ) {
    // @ts-ignore
    this.myDate =  this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
  }

  ngOnInit() {
    this.gar = new GardeMeuble();
    this.gar.datededepot = this.myDate;
  }

  save() {
    this.gardemeubleServ.Savegardemeuble(this.gar).subscribe(
      data => {

        console.log(data)
      }
    )
  }
}
