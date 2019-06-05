import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ThingService} from '../../shared/thing.service';
import {HelperService} from '../../shared/helper.service';
import {alreadyOnFirstPage, notFoundThingByName, severityError, severityInfo} from '../../constants/Constants';
import {Thing} from '../../shared/model/Thing';
import {CategoryService} from '../../shared/category.service';
import {Category} from '../../shared/model/Category';
import {SharedService} from '../../shared/shared.service';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.less']
})
export class AreaComponent implements OnInit {
  name: string;
  categories: any[];
  selectedCategory: number;
  lots: any[];
  page: number;

  constructor(private sharedService: SharedService, private thingService: ThingService, private helperService: HelperService,
              private route: Router, private categoryService: CategoryService) {
    this.page = 0;
  }

  ngOnInit() {
    this.findAllCategories();
    this.listenSearchedName();
    this.findRandomLots();
  }

  sortByDate() {
    this.lots.sort(function (object1, object2) {
      return object1.expired.toLocaleDateString() > object2.expired.toLocaleDateString() ? 1 : -1;
    });
  }

  sortByPrice() {
    this.lots.sort(function (object1, object2) {
      return object1.price > object2.price ? 1 : -1;
    });
  }

  sortByName() {
    this.lots.sort(function (object1, object2) {
      return object1.name.toLowerCase() > object2.name.toLowerCase() ? 1 : -1;
    });
  }

  goToNextPage() {
    this.page++;
    this.getThingsByCategory();
  }

  goToPreviousPage() {
    if (this.page === 0) {
      this.helperService.showMsg(severityError, alreadyOnFirstPage);
      return;
    }
    this.page--;
    this.getThingsByCategory();
  }

  changeCategory() {
    this.page = 0;
    this.getThingsByCategory();
  }

  thingDetails(lot: Thing) {
    this.route.navigate(['thing', lot.thingId]);
  }

  thingDetailRandom() {
    this.thingService.getRandomNumberId().subscribe((data: number) => {
      this.route.navigate(['thing', data]);
    });

  }

  private findAllCategories() {
    this.categoryService.getAllCategories().subscribe((data: Category[]) => {
      this.categories = this.modifyToList(data);
    }, error => {
      this.helperService.showMsg(severityError, error.error.message);
    });
  }

  private modifyToList(data: Category[]) {
    const categories = [];
    for (const category of data) {
      categories.push({label: category.categoryName, value: category.categoryId});
    }
    return categories;
  }

  private findRandomLots() {
    this.thingService.getRandomThings().subscribe((data: Thing[]) => {
      this.lots = data;
    });
  }

  private listenSearchedName() {
    this.sharedService.getName().subscribe(data => {
      if (data === '') {
        return;
      }
      this.getLotsByNameFromService(data);
    });
  }

  private getLotsByNameFromService(name: string) {
    this.thingService.getThingsByName(name).subscribe((data: Thing[]) => {
      this.lots = data;
    }, () => this.helperService.showMsg(severityInfo, notFoundThingByName));
  }

  private getThingsByCategory() {
    this.thingService.getThingsByCategories(this.selectedCategory, this.page).subscribe((data: Thing[]) => {
      this.lots = data;
    }, error => {
      this.helperService.showMsg(severityError, error.error.message);
    });
  }

}
