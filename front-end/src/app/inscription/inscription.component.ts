import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Agent } from '../models/Agent';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  formData = {
    matriculefiscal:'',
    firstName: '',
    adresse:'',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    message: '',
    message1: '',
    message2: '',
    message3: '',
    message4: '',
    message5: '',
    message6: '',
    message7: '',
 
};
data:any;




  constructor(private router: Router,
    private clientService: ClientService
  ) { }

  submitForm(): void {
    let submitData =true;
  if (this.formData.matriculefiscal && this.formData.matriculefiscal.length === 13) {
    var codeNumerique = this.formData.matriculefiscal.substring(0, 7);
    var cleControle = this.formData.matriculefiscal.substring(7, 8);
    var codeTVA = this.formData.matriculefiscal.substring(8, 9);
    var codeCategorie = this.formData.matriculefiscal.substring(9, 10);
    var etablissement =this.formData.matriculefiscal.substring(10, 13);

    // Vérification des formats
    var isNumeric = /^\d/.test(codeNumerique);
    var isAlpha = /^[a-zA-Z]/.test(cleControle) && /^[a-zA-Z]+$/.test(codeTVA) && /^[a-zA-Z]+$/.test(codeCategorie);
    var isEtablissement = /^\d/.test(etablissement);

    if (!isNumeric && !isAlpha && !isEtablissement) {
        alert("Matricule fiscal invalide.");submitData=false;
    }
} 
    const np = /[a-zA-Z]/;

    if (!this.formData.firstName || !np.test(this.formData.firstName) ) {
      alert("Nom et invalide");
  ;submitData=false;
    }

    if (!this.formData.adresse || this.formData.adresse.length < 2 && this.formData.adresse.length > 300) {
      alert("L'''adresse de projet est invalide.");
      ;submitData=false;
    }
    
  // Vérification de l'e-mail
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
if (!this.formData.email || !emailRegex.test(this.formData.email)) {
  alert('L\'e-mail va contenir un "." "t @ merci de verifier votre mail.');
  ;submitData=false;
}
    // Vérification du numéro de téléphone
    if (!this.formData.phoneNumber || this.formData.phoneNumber.length <8 ) {
      alert( "Le numéro de téléphone est invalide.");
      ;submitData=false;
    }

    // Vérification du mot de passe
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).+$/;
  if (!passwordRegex.test(this.formData.password)) {
    alert("Le mot de passe doit contenir au moins une lettre majuscule et un chiffre.");
    ;submitData=false;
  }

    // Vérification de la confirmation du mot de passe
    if (this.formData.password !== this.formData.confirmPassword) {
      alert("La confirmation du mot de passe ne correspond pas.") ;
      ;submitData=false;
    }
  // Vérification si le mot de passe contient au moins une lettre majuscule et un chiffre
  
  if(submitData ==true)
    this.addAgent(this.formData)
  
  }
    // Si toutes les validations passent, rediriger vers une autre page
    
  


  addAgent(agent: any) {
    this.clientService.saveagent(agent).subscribe((result:any)=>{
      alert("Enregestrer avec succée");
    this.data = result;
    this.router.navigate(['/accueil']);
    })
  }
}
