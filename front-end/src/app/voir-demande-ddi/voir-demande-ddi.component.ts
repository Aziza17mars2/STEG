import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemandeService } from '../services/demande.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-voir-demande-ddi',
  templateUrl: './voir-demande-ddi.component.html',
  styleUrls: ['./voir-demande-ddi.component.css']
})
export class VoirDemandeDDIComponent implements OnInit { formData = {
  matriculfiscal:'',
  nom:'',
  gerant:'',
  cin:'',
  adresse:'',
  email: '',
  adressprojet:'',
  message: '',
  onFileSelected1:'',
  onFileSelected2:'',
  onFileSelected3:'',
  onFileSelected4:'',
  remarque:'',
 
};


demandes: any[] = [];
constructor(private demandeService: DemandeService, private sanitizer: DomSanitizer) { }

ngOnInit(): void {
  this.loadDemandes("DDI");
}

loadDemandes(role:string) {
  this.demandeService.getAllDemandesDDI(role).subscribe((demandes: any[]) => {
    this.demandes = demandes;
  });
}

getSafeUrl(DemandeDdi:any): SafeResourceUrl {
  const url = this.formData.onFileSelected2;
  return this.sanitizer.bypassSecurityTrustResourceUrl(DemandeDdi);
}
}