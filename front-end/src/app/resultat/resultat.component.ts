import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.component.html',
  styleUrls: ['./resultat.component.css']
})
export class ResultatComponent {
  f = {
    matriculfiscal:'',
    message3: '',
    message4: '',
    cin: '',}
    constructor(private router: Router) { }
  submitForm(): void {
    if (this.f.matriculfiscal && this.f.matriculfiscal.length === 13) {
      var codeNumerique = this.f.matriculfiscal.substring(0, 7);
      var cleControle = this.f.matriculfiscal.substring(7, 8);
      var codeTVA = this.f.matriculfiscal.substring(8, 9);
      var codeCategorie = this.f.matriculfiscal.substring(9, 10);
      var etablissement =this.f.matriculfiscal.substring(10, 13);
  
      var isNumeric = /^\d/.test(codeNumerique);
      var isAlpha = /^[a-zA-Z]/.test(cleControle) && /^[a-zA-Z]+$/.test(codeTVA) && /^[a-zA-Z]+$/.test(codeCategorie);
      var isEtablissement = /^\d/.test(etablissement);
  
      if (!isNumeric && !isAlpha && !isEtablissement) {
          this.f.message3 = "Matricule fiscal invalide.";
      }
  } else {
      this.f.message3 = "Matricule fiscal invalide (la longueur doit être de 13 caractères).";
  }
  this.router.navigate(['/result']);

}

}
