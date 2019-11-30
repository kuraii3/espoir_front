import { Component, OnInit } from '@angular/core';
import {DonService} from "../services/don.service";
import {TokenStorageService} from "../auth/token-storage.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
nombre:any;
  private roles: string[];
  private authority: string;
  private username: string;
  constructor(private tokenStorage: TokenStorageService , private donServ: DonService) { }

  ngOnInit() {
    this.username = this.tokenStorage.getUsername();
    this.getAll();
    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if (role === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        } else if (role === 'ROLE_PM') {
          this.authority = 'pm';
          return false;
        }
        this.authority = 'user';
        return true;
      });
    }
  }
  getAll(){
    this.donServ.nbrnotAccepted().subscribe(
      data=> {
        this.nombre = data;
        console.log(data)
      }
    )
  }
}
