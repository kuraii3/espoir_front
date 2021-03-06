import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {UserComponent} from './user/user.component';
import {PmComponent} from './pm/pm.component';
import {AdminComponent} from './admin/admin.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {DonComponent} from './don/don.component';
import {ListeDonComponent} from './don/liste-don/liste-don.component';
import {EditDonComponent} from './don/edit-don/edit-don.component';
import {FormulaireDonAccepterComponent} from './don/formulaire-don-accepter/formulaire-don-accepter.component';
import {ListeDonSansChoixComponent} from './don/liste-don-sans-choix/liste-don-sans-choix.component';
import {ArchiveComponent} from './don/archive/archive.component';
import {RouteGuardService} from './auth/route-guard.service';
import {DepotVenteComponent} from './depot-vente/depot-vente.component'  ;
import {ListeDepVenteComponent} from "./liste-dep-vente/liste-dep-vente.component";
import {GardeMeubleComponent} from './garde-meuble/garde-meuble.component';
import {BeneficiaireDonComponent} from './beneficiaire-don/beneficiaire-don.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'user', component: UserComponent},
  {path: 'pm', component: PmComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'auth/login', component: LoginComponent},
  {path: 'signup', component: RegisterComponent},
  {path: 'don', component: DonComponent , canActivate: [RouteGuardService]},
  {path: 'ListeDon', component: ListeDonComponent, canActivate: [RouteGuardService]},
  {path: 'ListeDonToAccept', component: ListeDonSansChoixComponent, canActivate: [RouteGuardService]},
  {path: 'Archive', component: ArchiveComponent, canActivate: [RouteGuardService]},
  {path: 'editDon/:id', component: EditDonComponent, canActivate: [RouteGuardService]},
  {path: 'formAccepter/:id', component: FormulaireDonAccepterComponent, canActivate: [RouteGuardService]},
  {path: 'depotVente/:id', component: DepotVenteComponent, canActivate: [RouteGuardService]},
  {path: 'listeDepotVente', component: ListeDepVenteComponent, canActivate: [RouteGuardService]},
  {path: 'garde/:id', component: GardeMeubleComponent, canActivate: [RouteGuardService]},
  {path: 'beneficiaire/:id' , component: BeneficiaireDonComponent, canActivate:[RouteGuardService]},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
