import { Component, OnInit } from '@angular/core';
import {DonService} from "../../services/don.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  formualire:any;

  constructor(private donServ: DonService,private router: ActivatedRoute, private route: Router) { }

  ngOnInit() {
    this.getAll()
  }
  getAll(){
    this.donServ.ListDonRefused().subscribe(
      data=> {
        this.formualire =data;
        console.log(data)
      }
    )
  }
  edit(id) {this.route.navigate(['editDon/' + id]);}

}
