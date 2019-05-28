import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs';

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
    return this.httpClient.get(`/thing/name/${name}`);
  }

  getThingsByPrice(minPrice: number, maxPrice: number) {
    return this.httpClient.get(`/thing/price/${minPrice}/${maxPrice}`);
  }

  getThingsByCategories(categoryId: number, page: number) {
    return this.httpClient.get(`http://localhost:8080/thing/getAllByCategory/${categoryId}/?page=${page}`);
  }
}
