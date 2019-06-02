import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {SharedService} from '../shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  name: string;
  isLogged: boolean;

  constructor(private router: Router, private sharedService: SharedService) {
    this.isLogged = false;
  }

  ngOnInit() {
    this.sharedService.isLogged.subscribe(data => {
      this.isLogged = data;
    });
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
    this.sharedService.name.emit(this.name);
    this.router.navigate(['auction']);
  }

  goToUserDetails() {
    if (!this.isLogged) {
      return;
    }
    this.router.navigate(['home']);
  }
}
