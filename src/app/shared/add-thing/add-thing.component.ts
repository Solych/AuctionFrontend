import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../category.service";
import {Category} from "../model/Category";
import {Thing} from "../model/Thing";
import {HelperService} from "../helper.service";

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

  constructor(private categoryService: CategoryService, private helperService: HelperService) {
    this.price = 0;
  }

  ngOnInit() {
    this.categoryService.getAllCategories().subscribe((data: Category[]) => {
      this.categories = this.modifyToDropDown(data);
    })
  }

  fileUploaded(event) {
    let reader: FileReader = new FileReader();
    let file: File = event.target.files[0];
    reader.onloadend = () => {
      let temp = <string>reader.result;
      this.picture = temp.split("base64,")[1];
    };
    reader.readAsDataURL(file);
  }

  save() {
    console.log(this.date);
    const Thing = new Thing(this.price, this.name, new Date().getTime(), this.date, this.getOwnerIdFromStorage());
  }

  private modifyToDropDown(data: Category[]) {
    const categories = [];
    data.forEach(function (item) {
      categories.push({label: item.categoryName, value: item.categoryId});
    });
    return categories;
  }

}
