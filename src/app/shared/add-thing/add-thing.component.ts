import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-thing',
  templateUrl: './add-thing.component.html',
  styleUrls: ['./add-thing.component.less']
})
export class AddThingComponent implements OnInit {
  categories: any[];
  selectedCategory: string;

  constructor() {
    this.categories = [
      {
        label: 'auto',
        value: 'auto'
      },
      {
        label: 'books',
        value: 'books'
      },
      {
        label: 'coins',
        value: 'coins'
      }
    ];
  }

  ngOnInit() {
  }

  onBasicUploadAuto(event) {
    console.log(event);
  }

}
