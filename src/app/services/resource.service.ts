import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Resource } from '../models/resource';
import { Assignment } from '../models/assignment';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  apiResourceURL = environment.apiResourceURL;
  apiAssignmentURL = environment.apiAssignmentURL;

  constructor(private http: HttpClient) { }

  getResources(): Observable<Resource[]> {
    return this.http.get<Resource[]>(`${this.apiResourceURL}/get/`);
  }

  updateResource(resourceData: Resource, id: string ): Observable<any> {    
    return this.http.put<any>(`${this.apiResourceURL}/${id}`, resourceData);
  }

  getAssignments(): Observable<Assignment[]> {
    return this.http.get<Assignment[]>(`${this.apiAssignmentURL}/get/`);
  }

  addAssignment(assignment: Assignment): Observable<any> {
    return this.http.post<any>(`${this.apiAssignmentURL}/add`, assignment);
  }
}
