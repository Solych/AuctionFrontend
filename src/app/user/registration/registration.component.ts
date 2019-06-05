import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {HelperService} from '../../shared/helper.service';
import {UserService} from '../../shared/user.service';
import {NgForm} from '@angular/forms';
import {User} from '../../shared/model/User';
import {invalidMailOrUsername, invalidPassword, severityError, severitySuccess, successRegister} from '../../constants/Constants';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.less']
})
export class RegistrationComponent implements OnInit {
  @ViewChild('registrationForm')
  registrationForm: NgForm;
  password1: string;
  password2: string;
  username: string;
  place: string;
  mail: string;

  constructor(private route: Router, private helperService: HelperService, private userService: UserService) {
  }

  ngOnInit() {
  }

  register() {
    if (this.password1 !== this.password2) {
      this.helperService.showMsg(severityError, invalidPassword);
      this.registrationForm.reset();
      return;
    }

    this.userService.register(new User(this.username, this.mail, this.password1, this.place)).subscribe(data => {
      this.helperService.showMsg(severitySuccess, successRegister);
      this.route.navigate(['login']);
    }, error => {
      this.helperService.showMsg(severityError, invalidMailOrUsername);
      this.registrationForm.reset();
    });
  }

  close() {
    this.route.navigate(['auction']);
  }

}
