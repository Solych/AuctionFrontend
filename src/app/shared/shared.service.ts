import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public name = new BehaviorSubject('temp');
  public isLogged = new BehaviorSubject(false);
  constructor() { }

  public getIsLogged() {
    return this.isLogged.asObservable();
  }

  public getName() {
    return this.name.asObservable();
  }
}
