import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  name: string;
  isLogged: boolean;

  constructor(private router: Router) {
    this.isLogged = true;
  }

  ngOnInit() {
  }

  homePage() {
    this.router.navigate(['']);
  }

  help() {
    this.router.navigate(['help']);
  }

  goToLogin() {
    this.router.navigate(['login']);
  }

  search() {
    this.router.navigate(['auction'], { queryParams: { name: this.name } });
  }

  goToUserDetails() {
    this.router.navigate(['home']);
  }
}
