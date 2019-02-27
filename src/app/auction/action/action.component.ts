import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.less']
})
export class ActionComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  goToLogin() {
    this.route.navigate(['login']);
  }

}
