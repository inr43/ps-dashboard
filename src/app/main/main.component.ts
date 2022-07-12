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

  resourceAssignment() {
    this.route.navigateByUrl('resource')
  }
}
