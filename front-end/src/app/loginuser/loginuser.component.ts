import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { Agent } from '../models/Agent';
@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']
})
export class LoginuserComponent {

  formData = {
    email: '',
    password: '',
    message: '',
    message1: '',
};

data = {
  email: '',
  password: ''
};
constructor(private router: Router, private LoginService: LoginService) { }
  
  submitForm(): void {
    let submitData =true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!this.formData.email || !emailRegex.test(this.formData.email)) {
      ;submitData=false;
    }
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).+$/;
    if (!passwordRegex.test(this.formData.password)) {
      ;submitData=false;
    }  
    if(submitData ==true)
      this.loginUser()
    
    }
  
  loginUser() {
this.data.email = this.formData.email;
this.data.password = this.formData.password;
    this.LoginService.login(this.data).subscribe(
      response => {
        if(response != null) {
          if(response.role == "GUICHET")
          this.router.navigate(['/menus-guichet']);
          if(response.role == "DPTE")
            this.router.navigate(['/menus-unitee']);
          if(response.role == "DDI")
            this.router.navigate(['/menu-ddi']);
          if(response.role == "CLIENT")
            this.router.navigate(['/menu']);
          if(response.role == "ADMIN")
            this.router.navigate(['/admin']);
        }else {
          alert(" Email et Mot De Passe incorrect");
        }
    }
      
  );
  }
}