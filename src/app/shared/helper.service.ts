import {Injectable} from '@angular/core';
import {MessageService} from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private messageService: MessageService) {
  }

  public showMsg(severity: string, details: string) {
    this.messageService.add({
      severity: severity,
      detail: details
    });
  }

  public getOwnerIdFromStorage() {
    return this.getToken().sub;
  }

  private getToken() {
    const token = localStorage.getItem('token');
    const payload = token.split('.')[1];
    return JSON.parse(atob(payload));
  }

  public getExpirationDate() {
    return this.getToken().exp;
  }
}
