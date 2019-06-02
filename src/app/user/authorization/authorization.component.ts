import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../../shared/user.service';
import {HelperService} from '../../shared/helper.service';
import {Admission} from '../../shared/model/Admission';
import {Router} from '@angular/router';
import {invalidCredentials, severityError} from '../../constants/Constants';
import {SharedService} from '../../shared/shared.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.less']
})
export class AuthorizationComponent implements OnInit {
  @ViewChild('form')
  form: NgForm;
  password: string;
  username: string;

  constructor(private userService: UserService, private helperService: HelperService, private route: Router,
              private sharedService: SharedService) {
  }

  ngOnInit() {
  }

  login() {
    this.userService.login(new Admission(this.username, this.password)).subscribe((data: any) => {
      localStorage.setItem('token', data.token);
      this.route.navigate(['auction']);
      this.sharedService.isLogged.emit(true);
    }, error => {
      this.helperService.showMsg(severityError, invalidCredentials);
      this.password = null;
    });
  }

  register() {
    this.route.navigate(['registration']);
  }

}
