import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IboxComponent } from './ibox/ibox.component';
import {KooriComponent} from "./koori/koori.component";
import {FicheComponent} from "./fiche/fiche.component";
import {FicheResolverService} from "./_resolvers/FicheResolverService";
import {DashboardComponent} from "./dashboard/dashboard.component";
import { AddServiceComponent } from './service-catalogue/add-service/add-service.component';
import {RapportComponent} from "./rapport/rapport.component";
import {DetailRapportComponent} from "./rapport/detail-rapport/detail-rapport.component";
import {DetailRapportResolverService} from "./_resolvers/DetailRapportResolverService";
import { ListeDemandeComponent } from './liste-demande/liste-demande.component';
import { SessionComponent } from './session/session.component';
import { DetailSessionComponent } from './session/detail-session/detail-session.component';
import { DetailSessionResolverService } from './_resolvers/DetailSessionResolverService';
import { DetailServiceResolverService } from './_resolvers/DetailServiceResolverService';
import { DetailServiceComponent } from './service-catalogue/detail-service/detail-service.component';
import {ListeUtilisateurComponent} from "./liste-utilisateur/liste-utilisateur.component";
import {UtilisateurDetailComponent} from "./liste-utilisateur/utilisateur-detail/utilisateur-detail.component";
import {ListeDemandeByServiceResolver} from "./_resolvers/ListeDemandeByServiceResolver";
import {SessionByServiceResolverService} from "./_resolvers/SessionByServiceResolverService";
import {DetailDashboardComponent} from "./dashboard/detail-dashboard/detail-dashboard.component";
import { NotFoundComponent } from './not-found/not-found.component';
import { EditServiceComponent } from './service-catalogue/edit-service/edit-service.component';
import {AuthGuard} from "./keycloak/auth.guard";

const routes: Routes = [
  {path: '', redirectTo: '/dashboard/service/1', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent, data: {title: 'Dashboard'}, children: [
      {path: 'service/:id', component: DetailDashboardComponent, resolve: {detailService: DetailServiceResolverService}},
    ]},
  {path: 'ibox', component: IboxComponent},
  {path: 'koori', component: KooriComponent},
  {path: 'fiche/:id', component: FicheComponent, resolve: {fiche: FicheResolverService}},
  {path: 'service/:id', component: DetailServiceComponent, resolve: {detailService: DetailServiceResolverService} },
  {path: 'AddService', component: AddServiceComponent},
  {path: 'edit/:id', component: EditServiceComponent},
  {path: 'rapports/:id/details', component: DetailRapportComponent, resolve: {detailRapport: DetailRapportResolverService}},
  {path: 'rapports', component: RapportComponent},
  {path: 'ListeDemande', component: ListeDemandeComponent, resolve: {listeDemande: ListeDemandeByServiceResolver} },
  {path: 'session/:id', component: DetailSessionComponent , resolve: {session: DetailSessionResolverService} },
  {path: 'service/:id/sessions', component: SessionComponent , resolve: {sessionService: SessionByServiceResolverService}},
  {path: 'session/:id', component: DetailSessionComponent , resolve: {session: DetailSessionResolverService} },
  {path: 'utilisateur', component: ListeUtilisateurComponent},
  {path: 'utilisateur-detail/:id', component: UtilisateurDetailComponent},
  { path: 'not-found', component: NotFoundComponent },
  {path: '**', redirectTo: '/not-found'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
