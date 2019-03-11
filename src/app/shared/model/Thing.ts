import {User} from "./User";
import {Override} from "./Override";
import {Sale} from "./Sale";
export class Thing {
  thingId: number;
  name: string;
  picture?: string;
  minPrice: number;
  maxPrice: number;
  dateOfPut: Date;
  sellingTime: Date;
  owner: User;
  category: string;
  tags: string[];
  overrides: Override[];
  sale?: Sale;
}
