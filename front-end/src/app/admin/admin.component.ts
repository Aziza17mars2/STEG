import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import {  Role } from '../models/Agent';
import { ClientService } from '../services/client.service';
import { Agent } from '../models/Agent';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  users: Agent[] = [];
  searchMatricule: string = '';
  formData: any = this.getEmptyUser(); // Utiliser getEmptyUser pour initialiser formData

  data: any;
  roles: Role[] = [Role.GUICHET, Role.DDI, Role.DPTE, Role.CLIENT];

  constructor(private adminService: AdminService, private clientService: ClientService) { }

  ngOnInit(): void {
    this.loadAllUsers();
  }

  loadAllUsers() {
    this.adminService.getAllAgent().subscribe(users => {
      this.users = users;
    });
  }

  deleteAgent(userId: any) {
    if (confirm("Êtes-vous sûr de vouloir supprimer cet agent ?")) {
      this.adminService.deleteAgent(userId).subscribe({
        next: () => {
          this.users = this.users.filter(user => user.id !== userId);
          alert("Agent supprimé avec succès.");
        },
        error: (error) => {
          console.error("Une erreur s'est produite lors de la suppression de l'agent :", error);
          alert("Une erreur s'est produite lors de la suppression de l'agent.");
        }
      });
    }
  }

 
  addAgent(agent: Agent) {
    console.log("Role before sending: ", agent.role); // Log pour vérifier le rôle
    this.clientService.saveagent(agent).subscribe((result: any) => {
      alert("Enregistré avec succès");
      this.data = result;
      this.users.push(result); // Ajout de l'agent enregistré à la liste des utilisateurs
      this.resetFormData(); // Réinitialiser les données du formulaire après l'ajout de l'agent
      console.log("Role after reset: ", this.formData.role); // Log pour vérifier la réinitialisation
    });
  }
  

  updateAgent() {
    this.adminService.updateAgent(this.formData.id, this.formData).subscribe((updatedUser) => {
      const index = this.users.findIndex(user => user.id === this.formData.id);
      if (index !== -1) {
        this.users[index] = updatedUser;
      }
      this.resetFormData();
    });
  }

  onSearch() {
    if (this.searchMatricule) {
      this.adminService.searchByMatricule(this.searchMatricule).subscribe(users => {
        this.users = users;
      });
    } else {
      this.loadAllUsers();
    }
  }

  editAgent(user: Agent) {
    this.formData = { ...user };
  }

  cancelEdit() {
    this.resetFormData();
  }

  resetFormData() {
    this.formData = this.getEmptyUser();
  }

  private getEmptyUser(): any {
    return {
      id: '',
      matriculefiscal: '',
      firstName: '',
      address: '',
      email: '',
      phoneNumber: '',
      password: '',
      role: Role.GUICHET,
      matricule: ''
    };
  }
}
