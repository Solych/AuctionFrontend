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
    return localStorage.getItem('owner');
  }
}
