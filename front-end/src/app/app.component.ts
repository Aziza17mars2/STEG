import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projetSTEG';
  // constructor(private router: Router, private route: ActivatedRoute) {}

  // ngOnInit() {
  //   this.route.queryParams.subscribe(params => {
  //     const userType = params['user'];
  //     if (userType === 'guichet_unique') {
  //       this.router.navigate(['/login-guichet']);
  //     } else if (userType === 'unite_concernee') {
  //       this.router.navigate(['/login-int']);
  //     }
  //     // Ajoutez des conditions pour d'autres types d'utilisateurs si nécessaire
  //   });
  // }
}
