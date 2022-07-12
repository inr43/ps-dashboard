import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pipeline',
  templateUrl: './pipeline.component.html',
  styleUrls: ['./pipeline.component.scss']
})
export class PipelineComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  
  goHome() {
    this.route.navigateByUrl('/')
  }

}
