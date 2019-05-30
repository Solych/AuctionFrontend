import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs';
import {Thing} from './model/Thing';

@Injectable({
  providedIn: 'root'
})
export class ThingService {

  constructor(private httpClient: HttpClient) {  }

  getThingById(id: number) {
    return this.httpClient.get(`/thing/${id}`);
  }

  getRandomThings() {

  }

  getThingsByName(name: string) {
    return this.httpClient.get(`http://localhost:8080/thing/name/${name}`);
  }

  getThingsByCategories(categoryId: number, page: number) {
    return this.httpClient.get(`http://localhost:8080/thing/getAllByCategory/${categoryId}/?page=${page}`);
  }

  save(thing: Thing) {
    return this.httpClient.post(`http://localhost:8080/thing/save`, thing);
  }
}
