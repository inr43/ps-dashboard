import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resource-dashboard',
  templateUrl: './resource-dashboard.component.html',
  styleUrls: ['./resource-dashboard.component.scss']
})
export class ResourceDashboardComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  goHome() {
    this.route.navigateByUrl('/')
  }
  
}



