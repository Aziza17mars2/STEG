import { Component, OnInit } from '@angular/core';
import { DemandeService } from '../services/demande.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  formData = {
    matriculfiscal: '',
    nom: '',
    adresse: ''
  };

  data = {
    matriculfiscal: '',
    nom: '',
    adresse: ''
  };
  demandes: any[] = [];
  demandeId ='' 
  demande:any


  constructor(private demandeService: DemandeService, private sanitizer: DomSanitizer, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.loadDemandes("CLIENT");
    this.route.params.subscribe(params => {
      this.demandeId = params['demandeId'];
      this.demandeService.getDemandeById(this.demandeId).subscribe(res =>{
        this.demande = res;
      })
    });
  }
  loadDemandes(role:string) {
    this.demandeService.getAllDemandes(role).subscribe((demandes: any[]) => {
      this.demandes = demandes;
    });
  }
}

