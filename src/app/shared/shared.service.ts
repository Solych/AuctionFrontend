import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public name = new EventEmitter();
  public isLogged = new EventEmitter();
  constructor() { }
}
