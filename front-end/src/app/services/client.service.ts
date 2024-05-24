import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agent } from '../models/Agent';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  globalUrl = "http://localhost:8080/steg/";

  constructor(private http:HttpClient) { }

  saveagent(agent:Agent): Observable<any> {
    agent.role ="CLIENT";
    console.log("hello",agent)
    return this.http.post(this.globalUrl+"agent",agent);
  }
}