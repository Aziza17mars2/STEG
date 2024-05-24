import { Component, OnInit } from '@angular/core';
import { DemandeService } from '../services/demande.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Demande } from '../models/demande';

@Component({
  selector: 'app-voir-les-demande',
  templateUrl: './voir-les-demande.component.html',
  styleUrls: ['./voir-les-demande.component.css']
})
export class VoirLesDemandeComponent implements OnInit {
  formData = {
    matriculfiscal:'',
    nom:'',
    gerant:'',
    cin:'',
    adresse:'',
    email: '',
    adressprojet:'',
    onFileSelected1:'',
    onFileSelected2:'',
    onFileSelected3:'',
    onFileSelected4:'',
    message:'',
   
};

  demandes: any[] = [];

  constructor(private demandeService: DemandeService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.loadDemandes("GUICHET");
  }
 
  loadDemandes(role:string) {
    this.demandeService.getAllDemandes(role).subscribe((demandes: any[]) => {
      this.demandes = demandes;
    });
  }
  getSafeUrl(): SafeResourceUrl {
    const url = this.formData.onFileSelected1;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  getSafeUrl2(): SafeResourceUrl {
    const url = this.formData.onFileSelected2;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }getSafeUrl3(): SafeResourceUrl {
    const url = this.formData.onFileSelected3;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }getSafeUrl4(): SafeResourceUrl {
    const url = this.formData.onFileSelected4;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
