import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Client } from '../models/clients';
import { Project } from '../models/project';
import { ClientsService } from '../services/clients.service';
import { ProjectService } from '../services/project.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-projectform',
  inputs: ['saved'],
  templateUrl: './projectform.component.html',
  styleUrls: ['./projectform.component.scss']
})
export class ProjectformComponent implements OnInit {
  @Output() saved = new EventEmitter<boolean>();
  
  control: boolean =false;
  clients : Client[]=[];
  selectedClient: Client;
  filteredClients: any[]
  newClient : boolean=true;
  name      : string;
  client    : string;
  resources : string;
  description : string;
  budget    : Number;
  effort    : Number;
  percentage: Number;
  status    : string;
  stage     : string;
  risks     : string;
  production: Date;
  notes     : string;

  constructor(private clientService: ClientsService,
              private projectService : ProjectService,
              private messageService  : MessageService) { }

  ngOnInit(): void {
    this._getClients()
  }

  _getClients() {
    this.clientService.getClients().subscribe((response)=> {
      console.log("Clients received "+response.length);
      this.clients = response;
    },
    (error) => { 
      console.log(error.error.message);
    });
  }

  filterClient(event) {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered : any[] = [];
    let query = event.query;

    for(let i = 0; i < this.clients.length; i++) {
        let client = this.clients[i];
        if (client.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
            filtered.push(client);
        }
    }

    this.filteredClients = filtered;
  }

  onSave() { this.newClient=true;
    console.log("client selected "+ this.selectedClient.id )

    const project : Project = {
      client : this.selectedClient.id,
      name   : this.name,
      description : this.description,
      budget : this.budget,
      effort : this.effort,
      status : this.status,
      risks  : this.risks,
      production : this.production,
      notes : this.notes
    }
    this.projectService.addProject(project).subscribe((response)=> {
      this.addMessage(true, response.name)
      console.log("Response received toast"+response);
    },
    (error) => { 
      console.log(error.error.message);
            this.addMessage(false, error.error.message);
          });   

    this.saved.emit(true)
  }

  addMessage(state: boolean, log : string){
    this.messageService.add({
      severity: state ? 'success' : 'error', 
      summary: state ? 'Success!' : 'error', 
      detail: log})      }  
}
