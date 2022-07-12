import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/project';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  apiProjectURL = environment.apiProjectURL;

  constructor(private http: HttpClient) { }

  addProject(project: Project) : Observable<any> {
    return this.http.post<any>(`${this.apiProjectURL}/add`, project);
  }

  getProjectById(id: string): Observable<Project> {
    return this.http.get<Project>(`${this.apiProjectURL}/get/${id}`);
  }

  getProjects( ): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiProjectURL}/get/`);
  }

}
