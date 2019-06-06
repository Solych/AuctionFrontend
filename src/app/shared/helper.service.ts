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
    const payload = this.getToken();
    return payload ? payload.sub : null;
  }

  private getToken() {
    const token = localStorage.getItem('token');
    if (!token) {
      return;
    }
    const payload = token.split('.')[1];
    return JSON.parse(atob(payload));
  }

  public getExpirationDate() {
    const payload = this.getToken();
    return payload ? payload.exp : null;
  }

  public isLogged() {
    const token = localStorage.getItem('token');
    if (!token) {
      return false;
    }
    return new Date().getTime() <= this.getExpirationDate();
  }
}
