import { Component, OnInit } from '@angular/core';
import {DonService} from "../../services/don.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-liste-don',
  templateUrl: './liste-don.component.html',
  styleUrls: ['./liste-don.component.css']
})
export class ListeDonComponent implements OnInit {
  formualire:any;
  constructor(private donServ: DonService ,private router: ActivatedRoute, private route: Router) { }

  ngOnInit() {
    this.getAll()
  }
  getAll(){
    this.donServ.AllDon().subscribe(
      data=> {
        this.formualire =data;
        console.log(data)
      }
    )
  }
  edit(id) {this.route.navigate(['editDon/' + id]);}
}
