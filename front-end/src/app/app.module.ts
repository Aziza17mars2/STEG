import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importez FormsModule et ReactiveFormsModule depuis @angular/forms
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginGuichetComponent } from './login-guichet/login-guichet.component';
import { MenusGuichetComponent } from './menus-guichet/menus-guichet.component';
import { VoirLesDemandeComponent } from './voir-les-demande/voir-les-demande.component';
import { VoirLesDemandesRefuseesComponent } from './voir-les-demandes-refusees/voir-les-demandes-refusees.component';
import { VoirLesDemandesAccepteesComponent } from './voir-les-demandes-acceptees/voir-les-demandes-acceptees.component';
import { VoirLesDemandesEnCoursComponent } from './voir-les-demandes-en-cours/voir-les-demandes-en-cours.component';
import { DetailleUserComponent } from './detaille-user/detaille-user.component';
import { DetailAcceptComponent } from './detail-accept/detail-accept.component';
import { DetailEnCoursComponent } from './detail-en-cours/detail-en-cours.component';
import { LoginIntComponent } from './login-int/login-int.component';
import { VoirDemandeUniteeComponent } from './voir-demande-unitee/voir-demande-unitee.component';
import { MenusUniteeComponent } from './menus-unitee/menus-unitee.component';
import { VerficationUniteeComponent } from './verfication-unitee/verfication-unitee.component';
import { AdminComponent } from './admin/admin.component';
import { DemandesArchiveesComponent } from './demandes-archivees-gu/demandes-archivees.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ContactComponent } from './contact/contact.component';
import { DemandeComponent } from './demande/demande.component';
import { DetaileeComponent } from './detailee/detailee.component';
import { DocumentComponent } from './document/document.component';
import { GuideComponent } from './guide/guide.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { LoginuserComponent } from './loginuser/loginuser.component';
import { MenuComponent } from './menu/menu.component';
import { ResultComponent } from './result/result.component';
import { ResultatComponent } from './resultat/resultat.component';
import { ArchiveDDIComponent } from './archive-ddi/archive-ddi.component';
import { ArchiveDpteComponent } from './archive-dpte/archive-dpte.component';
import { ArchiveComponent } from './archive/archive.component';
import { MenuDDiComponent } from './menu-ddi/menu-ddi.component';
import { VoirDemandeDDIComponent } from './voir-demande-ddi/voir-demande-ddi.component';
import { DtAbonneComponent } from './dt-abonne/dt-abonne.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginGuichetComponent,
    MenusGuichetComponent,
    VoirLesDemandeComponent,
    VoirLesDemandesRefuseesComponent,
    VoirLesDemandesAccepteesComponent,
    VoirLesDemandesEnCoursComponent,
    DetailleUserComponent,
    DetailAcceptComponent,
    DetailEnCoursComponent,
    LoginIntComponent,
    VoirDemandeUniteeComponent,
    MenusUniteeComponent,
    VerficationUniteeComponent,
    AdminComponent,
    DemandesArchiveesComponent,
    AccueilComponent,
    ContactComponent,
    DemandeComponent,
    DetaileeComponent,
    LoginuserComponent,
    GuideComponent,
    DocumentComponent,
    InscriptionComponent,
    MenuComponent,
    ResultComponent,
    ResultatComponent,
    ArchiveDDIComponent,
    ArchiveDpteComponent,
    ArchiveComponent,
    MenuDDiComponent,
    VoirDemandeDDIComponent,
    DtAbonneComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
