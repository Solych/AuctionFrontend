import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../../shared/user.service';
import {HelperService} from '../../shared/helper.service';
import {Admission} from '../../shared/model/Admission';
import {Router} from '@angular/router';
import {invalidCredentials, invalidForm, severityError} from '../../constants/Constants';

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

  constructor(private userService: UserService, private helperService: HelperService, private route: Router) {
  }

  ngOnInit() {
  }

  login() {
    this.userService.login(new Admission(this.username, this.password)).subscribe(data => { // returns token
      localStorage.setItem('token', data);
      this.route.navigate(['auction']);
    }, error => {
      this.helperService.showMsg(severityError, invalidCredentials);
      this.password = null;
      this.username = null;
    });
  }

  register() {
    this.route.navigate(['registration']);
  }

}
