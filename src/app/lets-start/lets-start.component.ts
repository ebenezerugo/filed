import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-lets-start',
  templateUrl: './lets-start.component.html',
  styleUrls: ['./lets-start.component.css']
})
export class LetsStartComponent implements OnInit {

  name: string;
  monthlyBudget: number;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gotoKeepInTouch(): void {
    this.router.navigate(['/keep-in-touch']);
  }
}
