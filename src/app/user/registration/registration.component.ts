import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {HelperService} from '../../shared/helper.service';
import {UserService} from '../../shared/user.service';
import {NgForm} from '@angular/forms';
import {invalidForm, invalidPassword, severityError} from '../../core/constants';
import {User} from '../../shared/model/User';

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
    if (this.registrationForm.invalid || this.password1 !== this.password2) {
      this.helperService.showMsg(severityError, invalidForm);
      this.registrationForm.reset();
      return;
    }

    this.userService.register(new User(this.username, this.mail, this.password1, this.place)).subscribe(data => {
      this.route.navigate(['auction']);
    }, error => {
      this.helperService.showMsg(severityError, error.error.message);
      this.registrationForm.reset();
    });
  }

  close() {
    this.route.navigate(['auction']);
  }

}
