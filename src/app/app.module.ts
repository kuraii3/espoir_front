import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {LoginComponent} from './login/login.component';
import {UserComponent} from './user/user.component';
import {RegisterComponent} from './register/register.component';
import {HomeComponent} from './home/home.component';
import {AdminComponent} from './admin/admin.component';
import {PmComponent} from './pm/pm.component';
import { DonComponent } from './don/don.component';
import { ListeDonComponent } from './don/liste-don/liste-don.component';
import { EditDonComponent } from './don/edit-don/edit-don.component';
import { MenuComponent } from './menu/menu.component';
import { FormulaireDonAccepterComponent } from './don/formulaire-don-accepter/formulaire-don-accepter.component';
import { ListeDonSansChoixComponent } from './don/liste-don-sans-choix/liste-don-sans-choix.component';
import { ArchiveComponent } from './don/archive/archive.component';
import {httpInterceptorProviders} from './auth/auth-interceptor';
import {DepotVenteComponent} from './depot-vente/depot-vente.component';
import { ListeDepVenteComponent } from './liste-dep-vente/liste-dep-vente.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent,
    HomeComponent,
    AdminComponent,
    PmComponent,
    DonComponent,
    ListeDonComponent,
    EditDonComponent,
    DepotVenteComponent,
    MenuComponent,
    FormulaireDonAccepterComponent,
    ListeDonSansChoixComponent,
    ArchiveComponent,
    ListeDepVenteComponent,
    ListeDepVenteComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
