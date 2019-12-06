import { Component, OnInit } from '@angular/core';
import {DonService} from "../services/don.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DepotVenteService} from "../services/depot-vente.service";

@Component({
  selector: 'app-liste-dep-vente',
  templateUrl: './liste-dep-vente.component.html',
  styleUrls: ['./liste-dep-vente.component.css']
})
export class ListeDepVenteComponent implements OnInit {

  formualire: any;
  constructor(private depotVenteService: DepotVenteService , private router: ActivatedRoute, private route: Router) { }

  ngOnInit() {
    this.getAll();
  }
  getAll() {
    this.depotVenteService.AllDepotVente().subscribe(
      data => {
        this.formualire = data;
        console.log(data);
      }
    );
  }
  deleteDepVente(id)
  {
    this.depotVenteService.deleteDepotVente(id).subscribe(
      data => {
location.reload();
      }

    );
//    this.route.navigate(['/listeDepotVente']);
  }

}
