import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Admission} from './model/Admission';
import {Observable} from 'rxjs';
import {User} from './model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  login(admission: Admission): Observable<string> {
    return this.httpClient.post<string>(`/user/authorize`, admission);
  }

  register(user: User): Observable<User> {
    return this.httpClient.post<User>('/user/register', user);
  }
}
