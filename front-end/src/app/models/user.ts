export interface User {
    id: string,
    nom: string,
    prenom: string,
    address: string,
    telephone: string,
    password: string,
    role: Role,
    email: string,
    matricule: string,
    editMode?: boolean, // Ajoutez cet attribut

}
export enum Role {
    GUICHET = 'GUICHET',
    DDI = 'DDI',
    DPTE = 'DPTE'
  }
  
 