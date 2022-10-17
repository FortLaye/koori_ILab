import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AproposComponent } from './apropos/apropos.component';
import { KooriiboxComponent } from './kooriibox/kooriibox.component';
import { KooriComponent } from './koori/koori.component';
import { FicheComponent } from './fiche/fiche.component';
import { EvaluationNoteComponent } from './evaluation-note/evaluation-note.component';
import { ContactComponent } from './contact/contact.component';
import { CommunauteComponent } from './communaute/communaute.component';
import { RapportComponent } from './rapport/rapport.component';
import { IboxComponent } from './ibox/ibox.component';
import { MenuVerticalComponent } from './menu-vertical/menu-vertical.component';
import { SummarizePipe } from './_pipes/summarize.pipe';
import { CommonModule } from '@angular/common';
import { KooriiboxMenuComponent } from './kooriibox-menu/kooriibox-menu.component';
import { DemandeComponent } from './demande/demande.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListRapportsComponent } from './rapport/list-rapports/list-rapports.component';
import { ItemRapportComponent } from './rapport/list-rapports/item-rapport/item-rapport.component';
import { NodataComponent } from './nodata/nodata.component';
import { LoadingComponent } from './loading/loading.component';
import { FilterPipe } from './_pipes/filter.pipe';
import { TopComponent } from './top/top.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ServiceCatalogueComponent } from './service-catalogue/service-catalogue.component';
import { NavLinkServiceComponent } from './service-catalogue/nav-link-service/nav-link-service.component';
import { DetailServiceComponent } from './service-catalogue/detail-service/detail-service.component';
import { SessionComponent } from './session/session.component';
import {ConnexionComponent} from "./connexion/connexion.component";
import { NotFoundComponent } from './not-found/not-found.component';
import { InscriptionComponent } from './inscription/inscription.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({

  declarations: [
    AppComponent,
    ConnexionComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AproposComponent,
    KooriiboxComponent,
    KooriComponent,
    FicheComponent,
    EvaluationNoteComponent,
    ContactComponent,
    CommunauteComponent,
    RapportComponent,
    IboxComponent,
    MenuVerticalComponent,
    SummarizePipe,
    KooriiboxMenuComponent,
    DemandeComponent,
    ListRapportsComponent,
    ItemRapportComponent,
    NodataComponent,
    LoadingComponent,
    FilterPipe,
    TopComponent,
    FeedbackComponent,
    ServiceCatalogueComponent,
    NavLinkServiceComponent,
    DetailServiceComponent,
    SessionComponent,
    NotFoundComponent,
    InscriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  exports: [
    TopComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
