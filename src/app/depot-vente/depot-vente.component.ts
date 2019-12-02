import { Component, OnInit } from '@angular/core';
import {DepotVenteService} from '../services/depot-vente.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DepotVente} from '../modele/depot-vente';
import {DatePipe} from '@angular/common';



@Component({
  selector: 'app-depot-vente',
  templateUrl: './depot-vente.component.html',
  styleUrls: ['./depot-vente.component.css'],
  providers: [DatePipe]
})
export class DepotVenteComponent implements OnInit {
  DepotVente: DepotVente;
  id: number;
  datedept = new Date();
  dateVentedept = new Date();
  n: any;

  constructor(private depotVenteService: DepotVenteService, private router: ActivatedRoute, private route: Router, private datePipe: DatePipe) {
    // @ts-ignore
    this.datedept =  this.datePipe.transform(this.datedept, 'yyyy-MM-dd');

    // @ts-ignore
    this.dateVentedept =  this.datePipe.transform(this.dateVentedept, 'yyyy-MM-dd');

  }

  ngOnInit() {

    this.DepotVente = new DepotVente();

  }
  accepter(id, DepotVente) {
    this.depotVenteService.UpdateDepotVente(id, DepotVente).subscribe(
      resp => {
        this.route.navigate(['home']);
      }
    );
  }

  save() {
    this.depotVenteService.SaveDepotVente(this.DepotVente).subscribe(
      data => {

        this.route.navigate(['home']);
      }
    );

  }


  getLastId2() {
    return new Promise(resolve => {
      this.depotVenteService.lastid().subscribe(
        data => {
          this.id;
          console.log('hello ' + this.id );
          resolve(this.id);
        }
      );
    });
  }

  findbyid(id) {
    this.depotVenteService.DepotVenteById(id).subscribe(
      resp => {
        this.DepotVente = resp ;
        console.log(resp);
      }
    );
  }

}
