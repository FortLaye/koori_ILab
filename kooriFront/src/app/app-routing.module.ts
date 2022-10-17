import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AproposComponent } from './apropos/apropos.component';
import { CommunauteComponent } from './communaute/communaute.component';
import { ContactComponent } from './contact/contact.component';
import {HomeComponent} from "./home/home.component";
import { KooriiboxComponent } from './kooriibox/kooriibox.component';
import {KooriComponent} from "./koori/koori.component";
import {FicheComponent} from "./fiche/fiche.component";
import { EvaluationNoteComponent } from './evaluation-note/evaluation-note.component';
import { RapportComponent } from './rapport/rapport.component';
import {IboxComponent} from "./ibox/ibox.component";
import { MenuVerticalComponent } from './menu-vertical/menu-vertical.component';
import { FicheResolverService } from './_resolvers/FicheResolverService';
import { DemandeComponent } from './demande/demande.component';
import { ServiceResolverService } from './_resolvers/ServiceResolverService';
import { DetailServiceComponent } from './service-catalogue/detail-service/detail-service.component';
import { ServiceCatalogueComponent } from './service-catalogue/service-catalogue.component';
import {ConnexionComponent} from "./connexion/connexion.component";
import {InscriptionComponent} from "./inscription/inscription.component";
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [

  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'evaluation-note', component: EvaluationNoteComponent},
  {path: 'fiche/:id', component: FicheComponent, resolve: {fiche: FicheResolverService}},
  {path: 'kooriibox/ibox', component: IboxComponent, data: {title: 'Ibox', suite: ' ,les activités à faire'}},
  {path: 'kooriibox/koori', component: KooriComponent, data: {title: 'Koori', suite: ' ,les processus à dérouler'}},
  {path: 'kooriibox', component: KooriiboxComponent},
  {path: 'home', component: HomeComponent},
  {path: 'inscription', component: InscriptionComponent},
  {path: 'authentification', component: ConnexionComponent},
  {path: 'apropos', component: AproposComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'communaute', component: CommunauteComponent},
  {path: 'rapport', component: RapportComponent},
  {path: 'menu-vertical', component: MenuVerticalComponent},
  {path: 'demande', component: DemandeComponent},
  {path: 'service', component: ServiceCatalogueComponent},
  {path: 'service/:id', component: DetailServiceComponent, resolve: {service: ServiceResolverService}},
  { path: 'not-found', component: NotFoundComponent },
  {path: '**', redirectTo: '/not-found'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
// @ts-ignore
export class AppRoutingModule { }
