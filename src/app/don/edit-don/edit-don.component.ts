import { Component, OnInit } from '@angular/core';
import {DonService} from "../../services/don.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Don} from "../../modele/don";

@Component({
  selector: 'app-edit-don',
  templateUrl: './edit-don.component.html',
  styleUrls: ['./edit-don.component.css']
})
export class EditDonComponent implements OnInit {
  Don: Don;
  id: number;
  constructor(private donServ: DonService, private router: ActivatedRoute, private route: Router) { }

  ngOnInit() {
    this.Don = new Don();
    this.id = this.router.snapshot.params.id;
    this.findbyid(this.id);
  }
  accepter(id, don) {
    this.Don.isAccepted = true;
    this.donServ.UpdateDon(id, don).subscribe(
      resp => {
        this.route.navigate(['formAccepter/' + id]);
      }
    );
  }
  refuser(id, don) {
    this.Don.isAccepted = false;
    this.donServ.UpdateDon(id, don).subscribe(
      resp => {
        this.route.navigate(['home']);
      }
    );

  }
  findbyid(id) {
    this.donServ.DonById(id).subscribe(
      resp => {
        this.Don = resp ;
        console.log(resp);
      }
    );
  }
}
