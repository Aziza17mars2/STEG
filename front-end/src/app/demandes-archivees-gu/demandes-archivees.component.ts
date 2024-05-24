import { Component, OnInit } from '@angular/core';
import { DemandeService } from '../services/demande.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-demandes-archivees',
  templateUrl: './demandes-archivees.component.html',
  styleUrls: ['./demandes-archivees.component.css']
})
export class DemandesArchiveesComponent implements OnInit {
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
    remarque:'',
   
};


  demandes: any[] = [];

  constructor(private demandeService: DemandeService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    const roles: string[] = ["DPTE","DDI","GUICHET"];
    roles.forEach(role => {
        this.loadDemandes(role);
    });
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
  
}
