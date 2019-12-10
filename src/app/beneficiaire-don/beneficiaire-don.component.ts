import { Component, OnInit } from '@angular/core';
import { BeneficiaireDonService } from '../services/beneficiaire-don.service';
import {ActivatedRoute, Router} from '@angular/router';
import '../modele/beneficiaire.model';
import { Beneficiaire } from '../modele/beneficiaire.model';
import { from } from 'rxjs';

@Component({
  selector: 'app-beneficiaire-don',
  templateUrl: './beneficiaire-don.component.html',
  styleUrls: ['./beneficiaire-don.component.css']
})
export class BeneficiaireDonComponent implements OnInit {

  beneficiaire: Beneficiaire;
  id: number;
  
  constructor(private BeneficiaireDonService: BeneficiaireDonService, private router: ActivatedRoute, private route: Router) { }

  ngOnInit() {
    this.beneficiaire=new Beneficiaire();
    this.id = this.router.snapshot.params.id;
  }

  
  save() {
    this.BeneficiaireDonService.Savebeneficiaire(this.beneficiaire).subscribe(
      data => {
       
        this.route.navigate(['home']);
      }
    );

  }

}
