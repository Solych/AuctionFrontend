import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Thing} from './model/Thing';

@Injectable({
  providedIn: 'root'
})
export class ThingService {

  constructor(private httpClient: HttpClient) {  }

  getThingById(id: number) {
    return this.httpClient.get(`http://localhost:8080/thing/getById/${id}`);
  }

  getRandomThings() {
    return this.httpClient.get('http://localhost:8080/thing/getRandom');
  }

  getThingsByName(name: string) {
    return this.httpClient.get(`http://localhost:8080/thing/getThingByName/${name}`);
  }

  getThingsByCategories(categoryId: number, page: number) {
    return this.httpClient.get(`http://localhost:8080/thing/getAllByCategory/${categoryId}/?page=${page}`);
  }

  save(thing: Thing) {
    return this.httpClient.post(`http://localhost:8080/thing/save`, thing);
  }

  getOverrides(thingId: number) {
    return this.httpClient.get(`http://localhost:8080/thing/getDataByThingId/${thingId}`);
  }

  getRandomNumberId() {
    return this.httpClient.get(`http://localhost:8080/thing/getRandomIdOfThing`);
  }

  update(thingId: number, buyerId: number, time: number, price: number) {
    return this.httpClient.put('http://localhost:8080/thing/update', {
      buyer:
        {
          buyerId: buyerId
        },
      thing:
        {
          thingId: thingId
        },
      overrideTime: time,
      price: price
    });
  }

  getThingsByOwner(ownerId: number) {
    return this.httpClient.get(`http://localhost:8080/thing/getAllByUser/${ownerId}`);
  }

  getDataOfCategories(ownerId: number) {
    return this.httpClient.get(`http://localhost:8080/user/category/${ownerId}`);
  }

  getUserOverrides(userId: number) {
    return this.httpClient.get(`http://localhost:8080/user/prices/${userId}`);
  }
}
