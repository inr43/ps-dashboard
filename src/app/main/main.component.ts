import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  project : boolean = false;
  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  projectDashboard() {
    this.route.navigateByUrl('project')
  }

  pipelineDashboard() {
    this.route.navigateByUrl('pipeline')
  }

  documentationDashboard() {
    this.route.navigateByUrl('documentation')
  }

  resourcesDashboard() {
    this.route.navigateByUrl('resources')
  }

  challengesDashboard() {
    this.route.navigateByUrl('challenges')
  }
  
  resourceAssignment() {
    this.route.navigateByUrl('resource')
  }
}
