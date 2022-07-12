import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../models/clients';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  apiClientsURL = environment.apiClientsURL;

  constructor(private http: HttpClient) { }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.apiClientsURL}/get/`);
  }

}
