import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.scss']
})
export class ChallengesComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

   
  goHome() {
    this.route.navigateByUrl('/')
  }

}

