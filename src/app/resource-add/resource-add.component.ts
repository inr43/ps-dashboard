import { Component, OnInit } from '@angular/core';
import { Assignment } from '../models/assignment';
import { Project } from '../models/project';
import { Resource } from '../models/resource';
import { ProjectService } from '../services/project.service';
import { ResourceService } from '../services/resource.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';


@Component({
  selector: 'app-resource-add',
  templateUrl: './resource-add.component.html',
  styleUrls: ['./resource-add.component.scss']
})
export class ResourceAddComponent implements OnInit {
  projects : Project[] = [];
  resources : Resource[] = [];
  assignments: Assignment[] = [];

  selectedProject: Project;
  filteredProjects: any[]

  selectedResource: Resource;
  filteredResources: any[]

  loading : boolean = true;
  bankName : string;

  isDashboard : boolean = true;
  selectedAssignment : Assignment;

  constructor(private projectService : ProjectService,
              private resourceService : ResourceService,
              private messageService: MessageService,
              private route : Router) { }

  ngOnInit(): void {
    this.loading=false
    this._getProjects();
    this._getResources();
    this._getAssignments();
  }

  _getAssignments() {
    this.resourceService.getAssignments().subscribe((response)=> {
      console.log("Assignments received "+response.length);
      this.assignments = response;
    },
    (error) => { 
      console.log(error.error.message);      
    })
  }

  _getResources() {
    this.resourceService.getResources().subscribe((response)=> {
      console.log("Resources received "+response.length);
      this.resources = response;
    },
    (error) => { 
      console.log(error.error.message);      
    })
  }

  _getProjects() {
    this.projectService.getProjects().subscribe((response)=> {
      console.log("Projects received "+response.length);
      this.projects = response;
    },
    (error) => { 
      console.log(error.error.message);
    });
  }

  filterProject(event) {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered : any[] = [];
    let query = event.query;

    for(let i = 0; i < this.projects.length; i++) {
        let project = this.projects[i];
        if (project.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
            filtered.push(project);
        }
    }
   
    this.filteredProjects = filtered;
  }
 
  filterResources(event) {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered : any[] = [];
    let query = event.query;

    for(let i = 0; i < this.resources.length; i++) {
        let resource = this.resources[i];
        if (resource.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
            filtered.push(resource);
        }
    }
   
    this.filteredResources = filtered;
  }
 

  onAssign() {
    if (!this.selectedProject ) {
      this.addMessage(false, "No Project Selected to assign");
      return
    }
    if ( this.selectedResource)
    {
        const assignment : Assignment = {
          resource : this.selectedResource.id,
          project  : this.selectedProject.id,
          client   : this.selectedProject.client.id
        }
        if ( this.checkAssignment(this.selectedResource.id+this.selectedProject.id) )
          this.assignproject(assignment)
    }
    else{
      console.log("No Resources selected to assign")
      this.addMessage(false, "No resources Selected to assign")
    } 
  }


  assignproject(assignment :Assignment) {
    this.resourceService.addAssignment(assignment).subscribe((response)=> {
          this._getAssignments()
        },
        (error) => { 
          console.log(error.error.message);
        });
  }

  checkAssignment(key) {
    for ( let i in this.assignments)
    {
      const var1 = this.assignments[i].resource.id+this.assignments[i].project.id

      if ( key === var1 )
      {
        console.log( "Equal "+key + '=' + var1 ) 
        this.addMessage(false, "Resource already assigned to this project")
        return false
      }
    } 
    return true
  }

  viewResource(assignment : Assignment) { 
    this.isDashboard=false;
    this.selectedAssignment = assignment;
    console.log("Assignment "+assignment.project.name)
  }
 
  onProject() {
    this.bankName = this.selectedProject.client.name
  }

  goHome() {
    this.route.navigateByUrl('/')
  }

  addMessage(state: boolean, log : string){
    this.messageService.add({
      severity: state ? 'success' : 'error', 
      summary: state ? 'Success!' : 'error', 
      detail: log})      }
}
