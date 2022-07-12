import { Component, OnInit } from '@angular/core';
import { Client } from '../models/clients';
import { Project } from '../models/project';
import { ProjectService } from '../services/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})

export class ProjectComponent implements OnInit {
  newClient : boolean=true;
  saved : boolean=true;
  loading : boolean=true;
  projects : Project[] = []
  isDashboard : boolean=true

  constructor(private projectService : ProjectService ,
              private route : Router) { }

  ngOnInit(): void {
    this._getProjects();
  }
  
  _getProjects() {
    this.projectService.getProjects().subscribe((response)=> {
      console.log("Projects received "+response.length);
      this.projects = response;
      this.loading = false;
    },
    (error) => { 
      console.log(error.error.message);
    });

  }
  
  projectClicked(project :Project) {
    this.isDashboard=false
  }

  goHome() {
    this.route.navigateByUrl('/')
  }
  onSave(saved:boolean) {
    this.newClient = saved;
    this._getProjects()
  }
}
