import { Component, OnInit } from '@angular/core';
import {DonService} from "../services/don.service";
import {ActivatedRoute, Router } from "@angular/router";
import {GardemeubleService} from "../services/gardemeuble.service";

@Component({
  selector: 'app-garde-meuble',
  templateUrl: './garde-meuble.component.html',
  styleUrls: ['./garde-meuble.component.css']
})
export class GardeMeubleComponent implements OnInit {
  formulaire:any;

  constructor(private gardemeubleServ: GardemeubleService ,private router: ActivatedRoute, private route: Router) { }

  ngOnInit() {

    this.gardemeubleServ.Savegardemeuble(this.gardemeubleServ).subscribe(
      data=> {
        this.formulaire =data;
        console.log(data)
      }
    )
  }

}
