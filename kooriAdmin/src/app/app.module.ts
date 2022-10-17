import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FicheComponent} from "./fiche/fiche.component";
import { IboxComponent} from "./ibox/ibox.component";
import { KooriComponent} from "./koori/koori.component";
import { TopComponent} from "./top/top.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonModule} from "@angular/common";
import { SummarizePipe} from "./_pipes/summarize.pipe";
import { AddFicheComponent } from './add-fiche/add-fiche.component';
import { ServiceCatalogueComponent } from './service-catalogue/service-catalogue.component';
import { HttpClientModule } from '@angular/common/http';
import { AddServiceComponent } from './service-catalogue/add-service/add-service.component';
import { RapportComponent } from './rapport/rapport.component';
import { ItemRapportComponent } from './rapport/item-rapport/item-rapport.component';
import { DetailRapportComponent } from './rapport/detail-rapport/detail-rapport.component';
import { ListeDemandeComponent } from './liste-demande/liste-demande.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SessionComponent } from './session/session.component';
import { DetailSessionComponent } from './session/detail-session/detail-session.component';
import { DetailServiceComponent } from './service-catalogue/detail-service/detail-service.component';
import { AddRapportComponent } from './add-rapport/add-rapport.component';
import { FooterComponent } from './footer/footer.component';
import { ListeUtilisateurComponent } from './liste-utilisateur/liste-utilisateur.component';
import { UtilisateurDetailComponent } from './liste-utilisateur/utilisateur-detail/utilisateur-detail.component';
import { ItemSessionComponent } from './session/item-session/item-session.component';
import {AuthComponent} from "./auth/auth.component";
import { DetailDashboardComponent } from './dashboard/detail-dashboard/detail-dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ChartsModule } from 'ng2-charts';
import { EditServiceComponent } from './service-catalogue/edit-service/edit-service.component';
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";
import {initializer} from "./keycloak/keycloak-initializer";
import { FilterPipe } from './_pipes/filter.pipe';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    FicheComponent,
    IboxComponent,
    KooriComponent,
    TopComponent,
    DashboardComponent,
    SummarizePipe,
    AddFicheComponent,
    ServiceCatalogueComponent,
    AddServiceComponent,
    RapportComponent,
    ItemRapportComponent,
    DetailRapportComponent,
    ListeDemandeComponent,
    FooterComponent,
    SessionComponent,
    DetailSessionComponent,
    DetailServiceComponent,
    AddRapportComponent,
    FooterComponent,
    ListeUtilisateurComponent,
    UtilisateurDetailComponent,
    ItemSessionComponent,
    AuthComponent,
    DetailDashboardComponent,
    NotFoundComponent,
    EditServiceComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ChartsModule,
    KeycloakAngularModule,
    NgxPaginationModule
  ],
  providers: [
    /*{
      provide: APP_INITIALIZER,
      useFactory: initializer,
      multi: true,
      deps: [KeycloakService],
    },*/
  ],
  bootstrap: [AppComponent]
})
// @ts-ignore
export class AppModule { }
