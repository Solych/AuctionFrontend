import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../category.service";
import {Category} from "../model/Category";
import {Thing} from "../model/Thing";
import {HelperService} from "../helper.service";
import {ThingService} from '../thing.service';
import {errorCreate, invalidDate, invalidName, lowPrice, severityError, severitySuccess, successCreate} from '../../constants/Constants';

@Component({
  selector: 'app-add-thing',
  templateUrl: './add-thing.component.html',
  styleUrls: ['./add-thing.component.less']
})
export class AddThingComponent implements OnInit {
  categories: any[];
  selectedCategory: number;
  description: string;
  price: number;
  name: string;
  date: any;
  picture: string;

  constructor(private categoryService: CategoryService, private helperService: HelperService, private thingService: ThingService) {
    this.price = 1;
  }

  ngOnInit() {
    this.categoryService.getAllCategories().subscribe((data: Category[]) => {
      this.categories = this.modifyToDropDown(data);
    });
  }

  fileUploaded(event) {
    const reader: FileReader = new FileReader();
    const file: File = event.target.files[0];
    reader.onloadend = () => {
      const temp = <string>reader.result;
      this.picture = temp.split('base64,')[1];
    };
    reader.readAsDataURL(file);
  }

  save() {
    if (this.price < 1) {
      this.helperService.showMsg(severityError, lowPrice);
      return;
    }
    if (this.date < new Date()) {
      this.helperService.showMsg(severityError, invalidDate);
      return;
    }
    if (this.name && this.name.length > 30) {
      this.helperService.showMsg(severityError, invalidName);
      return;
    }
    const thing = new Thing(this.price, this.name, new Date().getTime(), this.date, this.helperService.getOwnerIdFromStorage(),
      this.selectedCategory, this.picture, this.description);
    this.thingService.save(thing).subscribe(data => {
      this.clearForm();
      this.helperService.showMsg(severitySuccess, successCreate);
    }, error => {
      this.clearForm();
      this.helperService.showMsg(severityError, errorCreate);
    });
  }

  private modifyToDropDown(data: Category[]) {
    const categories = [];
    data.forEach(function (item) {
      categories.push({label: item.categoryName, value: item.categoryId});
    });
    return categories;
  }

  private clearForm() {
    this.price = 1;
    this.selectedCategory = null;
    this.picture = null;
    this.description = null;
    this.date = null;
    this.name = null;
  }

}
