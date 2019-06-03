import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {HelperService} from './shared/helper.service';
import {SharedService} from './shared/shared.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanActivate {
  constructor(private helperService: HelperService, private router: Router, private sharedService: SharedService) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const token = localStorage.getItem('token');
    if (!token) {
      this.sharedService.isLogged.next(false);
      this.router.navigate(['login']);
      return false;
    }
    if (new Date().getTime() > this.helperService.getExpirationDate()) {
      this.sharedService.isLogged.next(false);
      localStorage.removeItem('token');
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
