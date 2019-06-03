import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {SharedService} from '../shared.service';
import {HelperService} from '../helper.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  name: string;
  isLogged: boolean;

  constructor(private router: Router, private sharedService: SharedService, private helperService: HelperService) {
  }

  ngOnInit() {
    this.isLogged = this.helperService.isLogged();
    this.sharedService.getIsLogged().subscribe((data: boolean) => {
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
    this.sharedService.name.next(this.name);
    this.router.navigate(['auction']);
  }

  goToUserDetails() {
    if (!this.isLogged) {
      return;
    }
    this.router.navigate(['home']);
  }
}
