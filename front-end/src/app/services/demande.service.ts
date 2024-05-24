import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Demande } from '../models/demande';
import { Observable, identity } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {
  
  globalUrl = "http://localhost:8080/steg/";
  constructor(private http:HttpClient) { }
  getAllDemandes(role:string): Observable<any> {
    return this.http.get(this.globalUrl+"demandes/"+role); 
  }
 
  savedemande(demande:Demande): Observable<any> {
    return this.http.post(this.globalUrl+"demande",demande);
  }
  getAllDemandesDPTE(role:string): Observable<any> {
    return this.http.get(this.globalUrl+"demandes/"+role); 
  }
  getAllDemandesDDI(role:string): Observable<any> {
    return this.http.get(this.globalUrl+"demandes/"+role); 
  }
  getAllDemande(matriculfiscal:string): Observable<any> {
    return this.http.get(this.globalUrl+"demandes/"+matriculfiscal); 
  }
  editStatusOfDemande(deemande:Demande,status:string){
    const params = new HttpParams().set('status', status);
    return this.http.put(this.globalUrl+"changeStatus",deemande,{params});
  }
  getDemandeById(demandeId:string): Observable<any> {
    return this.http.get(this.globalUrl+"get_by_id/"+ demandeId);
  }
}
