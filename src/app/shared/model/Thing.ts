import {User} from "./User";
import {Category} from "./Category";

export class Thing {
  thingId: number;
  minPrice: number;
  picture: string;
  sellingTime?: number;
  name: string;
  description?: string;
  dateOfPut: number;
  owner?: User;
  category?: Category;
  price?: number;

  constructor(minPrice: number, name: string, dateOfPut: number, sellingTime: number, owner: number, category: number,
              picture?: string, description?: string) {
    this.minPrice = minPrice;
    this.name = name;
    this.dateOfPut = dateOfPut;
    this.sellingTime = sellingTime;
    this.owner = {buyerId: owner};
    this.category = {categoryId: category};
    this.picture = picture;
    this.description = description;
  }
}

