import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DonService} from "../../services/don.service";

@Component({
  selector: 'app-liste-don-sans-choix',
  templateUrl: './liste-don-sans-choix.component.html',
  styleUrls: ['./liste-don-sans-choix.component.css']
})
export class ListeDonSansChoixComponent implements OnInit {
  formualire:any;
  constructor(private donServ: DonService,private router: ActivatedRoute, private route: Router) { }

  ngOnInit() {
    this.getAll()
  }
  getAll(){
    this.donServ.ListDonNotAccepted().subscribe(
      data=> {
        this.formualire =data;
        console.log(data)
      }
    )
  }

  edit(id) {this.route.navigate(['editDon/' + id]);
}}
