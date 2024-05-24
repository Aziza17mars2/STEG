import { Component, OnInit } from '@angular/core';
import { DemandeService } from '../services/demande.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-voir-demande-unitee',
  templateUrl: './voir-demande-unitee.component.html',
  styleUrls: ['./voir-demande-unitee.component.css']
})
export class VoirDemandeUniteeComponent implements OnInit {
  formData = {
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
    this.loadDemandes("DPTE");
  }

  loadDemandes(role:string) {
    this.demandeService.getAllDemandesDPTE(role).subscribe((demandes: any[]) => {
      this.demandes = demandes;
    });
  }
  getSafeUrl(demande:any): SafeResourceUrl {
    const url = this.formData.onFileSelected1;
    return this.sanitizer.bypassSecurityTrustResourceUrl(demande);
  }
 
}
