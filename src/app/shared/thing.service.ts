import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ThingService {

  constructor(private httpClient: HttpClient) { }

  getThingById(id: number) {
    this.httpClient.get(`/getThingById/${id}`);
  }
}
